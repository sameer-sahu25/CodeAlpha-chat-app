import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import SecurityPage from "./pages/SecurityPage";
import ViberOutPage from "./pages/ViberOutPage";
import BlogPage from "./pages/BlogPage";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/" />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/communities" element={<CommunitiesPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/viber-out" element={<ViberOutPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
