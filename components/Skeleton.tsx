'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  count = 1
}: SkeletonProps) {
  const baseClass = 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
    card: 'rounded-3xl'
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? 16 : variant === 'circular' ? 48 : 100)
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${baseClass} ${variantClasses[variant]} ${className}`}
          style={style}
        />
      ))}
    </>
  );
}

// Preset skeletons for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="h-44 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="rectangular" width={80} height={32} className="rounded-full" />
        </div>
        
        <Skeleton variant="text" width="40%" height={16} />
        
        <div className="flex gap-2 pt-2">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={32} height={32} />
        </div>
        
        <Skeleton variant="rectangular" height={8} className="rounded-full" />
      </div>
    </div>
  );
}

export function TripCardSkeleton() {
  return (
    <motion.div 
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardSkeleton />
    </motion.div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" height={16} />
            <Skeleton variant="text" width="50%" height={12} />
          </div>
          <Skeleton variant="rectangular" width={60} height={28} className="rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="flex flex-col items-center">
        <Skeleton variant="circular" width={112} height={112} />
        <div className="mt-4 space-y-2 flex flex-col items-center">
          <Skeleton variant="text" width={120} height={24} />
          <Skeleton variant="text" width={80} height={16} />
        </div>
      </div>
      
      {/* Stats Card */}
      <Skeleton variant="card" height={120} />
      
      {/* List */}
      <ListSkeleton count={3} />
    </div>
  );
}
