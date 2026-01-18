'use client';

import { useState, useEffect, useRef } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

interface Message {
  id: string;
  user_id: string;
  user_name: string;
  content: string;
  created_at: string;
}

interface ChatRoomProps {
  tripId: string;
}

export default function ChatRoom({ tripId }: ChatRoomProps) {
  const { user } = usePrivy();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    
    // Realtime subscription
    const channel = supabase
      .channel(`chat-${tripId}`)
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'trip_messages', filter: `trip_id=eq.${tripId}` },
        (payload) => {
          setMessages(prev => [...prev, payload.new as Message]);
          scrollToBottom();
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [tripId]);

  async function fetchMessages() {
    const { data } = await supabase
      .from('trip_messages')
      .select('*')
      .eq('trip_id', tripId)
      .order('created_at', { ascending: true });
    
    if (data) {
      setMessages(data);
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const content = newMessage.trim();
    setNewMessage('');

    await supabase.from('trip_messages').insert({
      trip_id: tripId,
      user_id: user.id,
      user_name: user.email?.address?.split('@')[0] || 'User',
      content
    });
  }

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 font-bold text-gray-700 bg-gray-50 rounded-t-2xl">
        💬 行程聊天室
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => {
          const isMe = msg.user_id === user?.id;
          return (
            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[75%] rounded-2xl px-4 py-2 text-sm
                ${isMe 
                  ? 'bg-blue-500 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }
              `}>
                {!isMe && (
                  <div className="text-[10px] opacity-70 mb-1">{msg.user_name}</div>
                )}
                {msg.content}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-gray-100 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="傳送訊息..."
          className="flex-1 bg-gray-50 border-0 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-100 outline-none"
        />
        <button 
          type="submit"
          disabled={!newMessage.trim()}
          className="bg-blue-500 text-white p-2 rounded-xl px-4 font-bold disabled:opacity-50"
        >
          ➤
        </button>
      </form>
    </div>
  );
}
