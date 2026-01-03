'use client';

import { useState, useEffect, useRef } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

interface Message {
  id: number;
  ride_id: number;
  user_address: string;
  content: string;
  created_at: string;
}

export default function RideChat({ rideId }: { rideId: number }) {
  const { user } = usePrivy();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('ride_chats')
      .select('*')
      .eq('ride_id', rideId)
      .order('created_at', { ascending: true });
    
    if (!error && data) {
        setMessages(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Polling for demo simplicity
    return () => clearInterval(interval);
  }, [rideId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !user?.wallet?.address) return;

    const { error } = await supabase
      .from('ride_chats')
      .insert([{
        ride_id: rideId,
        user_address: user.wallet.address,
        content: newMessage
      }]);

    if (!error) {
        setNewMessage('');
        fetchMessages();
    }
  };

  if(!user) return <div className="p-4 text-center text-xs text-gray-500">Connect wallet to chat</div>;

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-100 p-2 mt-2">
      <div className="h-40 overflow-y-auto space-y-2 p-2">
        {loading && <p className="text-[10px] text-gray-400 text-center">Loading messages...</p>}
        {!loading && messages.length === 0 && (
            <p className="text-[10px] text-gray-400 text-center py-4">No messages yet. Say hi! 👋</p>
        )}
        {messages.map((msg) => {
          const isMe = msg.user_address.toLowerCase() === user.wallet?.address?.toLowerCase();
          return (
            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg px-2 py-1.5 text-xs ${isMe ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                {!isMe && <p className="text-[8px] font-bold text-gray-400 mb-0.5">{msg.user_address.slice(0, 4)}...</p>}
                {msg.content}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2 p-2 border-t border-gray-200">
        <input 
            className="flex-1 bg-white border border-gray-200 rounded px-2 py-1.5 text-xs text-black focus:outline-none focus:border-black"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="bg-black text-white px-3 py-1 rounded text-xs font-bold disabled:opacity-50"
        >
            Send
        </button>
      </div>
    </div>
  );
}
