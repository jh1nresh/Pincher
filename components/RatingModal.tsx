import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarRating } from './StarRating';
import { supabase } from '@/lib/supabase';

interface Participant {
  user_id: string;
  user_name: string;
  avatar_url?: string;
}

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripId: string;
  currentUserId: string;
  participants: Participant[]; // Users to rate
  onSuccess: () => void;
}

export function RatingModal({ isOpen, onClose, tripId, currentUserId, participants, onSuccess }: RatingModalProps) {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Filter out self
  const targets = participants.filter(p => p.user_id !== currentUserId);

  const handleSubmit = async () => {
    setLoading(true);
    
    // Prepare inserts
    const inserts = targets
      .filter(p => ratings[p.user_id]) // Only submit if rated
      .map(p => ({
        rater_id: currentUserId,
        rated_id: p.user_id,
        trip_id: tripId,
        score: ratings[p.user_id],
        comment: comments[p.user_id] || ''
      }));

    if (inserts.length === 0) {
      onClose();
      return;
    }

    const { error } = await supabase.from('user_ratings').insert(inserts);

    if (error) {
      console.error('Failed to submit ratings:', error);
      alert('Failed to submit ratings. Please try again.');
    } else {
      onSuccess();
      onClose();
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
      >
        <div className="bg-linear-to-r from-yellow-400 to-orange-500 p-4 text-white text-center">
          <h2 className="text-xl font-black">Rate Your Trip ⭐️</h2>
          <p className="opacity-90 text-xs">How was your experience?</p>
        </div>

        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {targets.map(user => (
            <div key={user.user_id} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">
                  {user.avatar_url ? (
                    <img src={user.avatar_url} alt={user.user_name} className="w-full h-full rounded-full" />
                  ) : (
                    <span>👤</span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-sm dark:text-gray-200">{user.user_name}</div>
                  <div className="text-[10px] text-gray-400">Passenger</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <StarRating
                  rating={ratings[user.user_id] || 0}
                  setRating={(r) => setRatings(prev => ({ ...prev, [user.user_id]: r }))}
                  size="lg"
                />
                
                <textarea
                  placeholder="Optional comment..."
                  className="w-full text-xs p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
                  rows={2}
                  value={comments[user.user_id] || ''}
                  onChange={e => setComments(prev => ({ ...prev, [user.user_id]: e.target.value }))}
                />
              </div>
            </div>
          ))}

          {targets.length === 0 && (
             <div className="text-center text-gray-500 py-4">
               No one else to rate in this trip!
             </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-bold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || targets.length === 0}
            className="flex-1 py-3 rounded-xl font-bold bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
