'use client';

import { motion } from 'framer-motion';

export default function GlobeAnimation() {
  const lines = Array.from({ length: 8 });
  const dots = Array.from({ length: 12 });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-80 h-80 lg:w-96 lg:h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 via-pink-100 to-rose-50 blur-xl opacity-60" />

        {/* Globe sphere */}
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 35% 35%, #fff5f0, #ffd4b8, #ffb088, #e86b30)',
            boxShadow: '0 20px 60px rgba(255, 85, 0, 0.2), inset -20px -20px 40px rgba(0,0,0,0.08)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {/* Latitude lines */}
          {lines.map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-white/20 rounded-full"
              style={{ top: `${(i + 1) * 11}%` }}
            />
          ))}

          {/* Longitude lines (simulated with rotated ellipses) */}
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 rounded-full border border-white/15"
              style={{ transform: `rotateY(${deg}deg) scaleX(0.3)` }}
            />
          ))}
        </motion.div>

        {/* Orbiting dots */}
        {dots.map((_, i) => {
          const angle = (i / dots.length) * 360;
          const radius = 160;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius * 0.4;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-accent/60"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}

        {/* Floating badges */}
        <motion.div
          className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
            AI
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">AI Agent</p>
            <p className="text-[10px] text-gray-400">Deployed</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
            S
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">SaaS</p>
            <p className="text-[10px] text-gray-400">Live</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-bold">
            D
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Dev</p>
            <p className="text-[10px] text-gray-400">In Progress</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
