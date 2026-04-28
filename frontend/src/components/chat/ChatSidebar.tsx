import { Search, MessageCirclePlus, MoreVertical, Filter } from "lucide-react";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import { getSafeAvatarUrl } from "@/lib/utils";

interface ChatSidebarProps {
  selectedChat: string | null;
  onSelectChat: (id: string) => void;
}

export default function ChatSidebar({ selectedChat, onSelectChat }: ChatSidebarProps) {
  const { users, getUsers, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="flex flex-col h-full bg-sidebar-bg border-r border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-sidebar-header">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-muted text-muted-foreground text-sm">Me</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-3 text-muted-foreground">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <MessageCirclePlus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Contacts list */}
      <div className="flex-1 overflow-y-auto">
        {isUsersLoading ? (
          <div className="p-4 text-center text-muted-foreground text-sm">Loading contacts...</div>
        ) : (
          users.map((user) => (
            <button
              key={user.id}
              onClick={() => {
                onSelectChat(user.id);
                setSelectedUser(user);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 hover:bg-muted/50 transition-colors ${
                selectedChat === user.id ? "bg-muted" : ""
              }`}
            >
              <div className="relative shrink-0">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={getSafeAvatarUrl(user.profilePic)} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                    {user.fullName.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {onlineUsers.includes(user.id) && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-sidebar-bg" />
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[15px] text-foreground truncate">{user.fullName}</span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
