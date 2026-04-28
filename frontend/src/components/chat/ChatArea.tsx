import { useState, useRef, useEffect } from "react";
import { Send, Smile, Paperclip, Mic, MoreVertical, Phone, Video, Search, ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import { format } from "date-fns";
import { getSafeAvatarUrl } from "@/lib/utils";

interface ChatAreaProps {
  chatId: string | null;
  onBack?: () => void;
}

export default function ChatArea({ chatId, onBack }: ChatAreaProps) {
  const [input, setInput] = useState("");
  const { messages, getMessages, sendMessage, selectedUser, isMessagesLoading } = useChatStore();
  const { authUser } = useAuthStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) getMessages(chatId);
  }, [chatId, getMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage({ text: input });
    setInput("");
  };

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center space-y-3 px-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Send className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-xl font-light text-foreground">Select a chat</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Choose a contact from the sidebar to start messaging.
          </p>
        </div>
      </div>
    );
  }

  const StatusIcon = ({ status }: { status?: string }) => {
    if (status === "read") return <span className="text-primary text-xs">✓✓</span>;
    if (status === "delivered") return <span className="text-muted-foreground text-xs">✓✓</span>;
    return <span className="text-muted-foreground text-xs">✓</span>;
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-card border-b border-border">
        {onBack && (
          <button onClick={onBack} className="p-1 -ml-1 mr-1 md:hidden">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
        <Avatar className="h-10 w-10">
          <AvatarImage src={getSafeAvatarUrl(selectedUser.profilePic)} />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
            {selectedUser.fullName.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[15px] text-foreground">{selectedUser.fullName}</h3>
          <p className="text-xs text-muted-foreground">online</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 space-y-4">
        {isMessagesLoading ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">Loading messages...</div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.senderId === authUser?.id;
            return (
              <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div
                  className={`relative max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                    isMe
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted text-foreground rounded-tl-none"
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <div className={`text-[10px] mt-1 flex items-center gap-1 ${isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {format(new Date(msg.createdAt), "HH:mm")}
                    {isMe && <StatusIcon status="read" />}
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-background border-t border-border">
        <div className="flex items-center gap-2 bg-muted/50 rounded-2xl px-4 py-2">
          <button className="p-1 text-muted-foreground hover:text-primary transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground py-2"
          />
          <button 
            onClick={handleSend} 
            disabled={!input.trim()}
            className="p-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
