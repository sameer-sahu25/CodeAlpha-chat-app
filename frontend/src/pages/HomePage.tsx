import { MessageCircle, Phone, Video, Download, Send } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";

export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>("1");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-viber-purple-light/10" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Free and secure<br />
              <span className="text-primary">calls & messages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              Connect with anyone, anywhere. Viber keeps your conversations private with end-to-end encryption.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat Now
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-full font-medium hover:bg-muted transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-[500px] bg-gradient-to-b from-primary to-viber-purple-light rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-background rounded-[2.5rem] flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2 text-center px-6">
                  <div className="h-3 w-32 bg-muted rounded-full" />
                  <div className="h-3 w-24 bg-muted rounded-full mx-auto" />
                </div>
                <div className="w-full px-6 space-y-3 mt-4">
                  <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 text-xs text-secondary-foreground">Hey! How are you? 👋</div>
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-3 text-xs text-foreground ml-auto w-fit">I'm great! Let's call 📞</div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 text-xs text-secondary-foreground">Sure, video call? 🎥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isAuthModalOpen && (
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      )}
    </div>
  );
}
