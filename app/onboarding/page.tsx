'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ONBOARDING_STEPS = [
  {
    icon: '🚗',
    title: 'Find Your Ride',
    description: 'Swipe through available rides in your area. Match with others going the same way!',
    color: 'from-violet-500 to-pink-500',
    bgColor: 'bg-violet-100'
  },
  {
    icon: '👥',
    title: 'Split the Cost',
    description: 'Share the ride fare with your co-riders. Save up to 75% on every trip!',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: '💸',
    title: 'Pay Your Way',
    description: 'Use Venmo, PayPal, Zelle, Cash App, Apple Cash, or just cash. Whatever works for you!',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-100'
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Check if already onboarded
    const onboarded = localStorage.getItem('pincher_onboarded');
    if (onboarded) {
      router.replace('/trips');
    }
  }, [router]);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Complete onboarding
      localStorage.setItem('pincher_onboarded', 'true');
      router.push('/trips');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('pincher_onboarded', 'true');
    router.push('/trips');
  };

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              className={`w-32 h-32 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-8`}
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <span className="text-6xl">{step.icon}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className={`text-3xl font-black mb-4 bg-linear-to-r ${step.color} bg-clip-text text-transparent`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {step.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Section */}
      <div className="p-8 pb-12">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {ONBOARDING_STEPS.map((_, index) => (
            <motion.div
              key={index}
              className={`rounded-full transition-all ${
                index === currentStep 
                  ? 'w-8 h-2 bg-gray-900' 
                  : 'w-2 h-2 bg-gray-200'
              }`}
              animate={{ 
                scale: index === currentStep ? 1 : 0.8,
                opacity: index === currentStep ? 1 : 0.5
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          className={`w-full py-4 rounded-2xl font-bold text-white text-lg bg-linear-to-r ${step.color} shadow-lg`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {currentStep === ONBOARDING_STEPS.length - 1 ? 'Get Started' : 'Next'}
        </motion.button>
      </div>
    </div>
  );
}
