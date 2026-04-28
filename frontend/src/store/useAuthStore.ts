import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";
import { io, Socket } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

interface User {
  id: string;
  email: string;
  fullName: string;
  profilePic?: string;
}

interface AuthState {
  authUser: User | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  onlineUsers: string[];
  socket: Socket | null;

  checkAuth: () => Promise<void>;
  signup: (data: any) => Promise<void>;
  login: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error: any) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      if (res.data) {
        set({ authUser: res.data });
        toast.success("Account created successfully");
        // Ensure authUser is set before connecting socket
        setTimeout(() => get().connectSocket(), 500);
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong during signup";
      toast.error(message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      if (res.data) {
        set({ authUser: res.data });
        toast.success("Logged in successfully");
        // Ensure authUser is set before connecting socket
        setTimeout(() => get().connectSocket(), 500);
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Invalid credentials";
      toast.error(message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error: any) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser) return;
    
    // Disconnect existing socket if any to ensure fresh connection with correct userId
    if (get().socket?.connected) {
      get().socket?.disconnect();
    }

    const socket = io(BASE_URL, {
      query: {
        userId: authUser.id,
      },
      transports: ["websocket"],
    });
    
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("getOnlineUsers", (userIds) => {
      console.log("Online users received:", userIds);
      set({ onlineUsers: userIds });
    });

    set({ socket: socket });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket?.disconnect();
  },
}));
