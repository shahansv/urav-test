"use client";

import {
  motion,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "motion/react";

interface AssetLoaderProps {
  progressMV: MotionValue<number>;
  error: string | null;
  onRetry: () => void;
}

export default function AssetLoader({
  progressMV,
  error,
  onRetry,
}: AssetLoaderProps) {
  const barWidth = useTransform(progressMV, [0, 100], ["0%", "100%"]);
  const displayNumber = useTransform(progressMV, (v) => `${Math.round(v)}%`);
  const scale = useTransform(progressMV, [0, 100], [0.96, 1]);

  return (
    <motion.div
      className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {error ? (
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-neutral-400 text-sm tracking-widest uppercase">
            Loading failed
          </p>
          <p className="text-neutral-500 text-xs max-w-xs">{error}</p>
          <button
            onClick={onRetry}
            className="mt-2 px-6 py-2 rounded-full border border-neutral-700 text-white text-sm hover:border-neutral-500 transition-colors"
          >
            Try again
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center gap-8 w-full max-w-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-neutral-500 text-[11px] tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Loading experience
          </motion.p>

          <div className="w-full h-px bg-neutral-800 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-white"
              style={{ width: barWidth }}
            />
          </div>

          <motion.p
            className="text-white font-light tabular-nums"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              scale,
            }}
          >
            {displayNumber}
          </motion.p>

          <motion.p
            className="text-neutral-700 text-[10px] tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Please wait…
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
