import { useState, useEffect } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import { useChatStore } from "@/store/useChatStore";

export default function ChatPage() {
  const { selectedUser, setSelectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();

  useEffect(() => {
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [subscribeToMessages, unsubscribeFromMessages, selectedUser]);

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      <div className="w-80 md:w-96 flex-shrink-0">
        <ChatSidebar selectedChat={selectedUser?.id || null} onSelectChat={(id) => {
          // Find user by id and set it
          // Note: ChatSidebar needs to be updated to use actual users from store
        }} />
      </div>
      <div className="flex-1">
        <ChatArea chatId={selectedUser?.id || null} onBack={() => setSelectedUser(null)} />
      </div>
    </div>
  );
}
