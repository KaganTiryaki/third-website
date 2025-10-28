"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet } from "lucide-react";

export function WaterWasteCounter() {
  const [wastedLiters, setWastedLiters] = useState(0);
  const [drops, setDrops] = useState<{ id: number; x: number; startTime: number }[]>([]);
  const [nextDropId, setNextDropId] = useState(0);
  const [puddleHeight, setPuddleHeight] = useState(0);
  const faucetRef = useRef<HTMLDivElement>(null);

  // Site başlangıç tarihi (örnek: 1 Ocak 2025)
  const SITE_START_DATE = new Date("2025-01-01").getTime();
  // Dünyada saniyede israf edilen su (örnek: 1 milyon litre/saniye)
  const WASTE_RATE_PER_SECOND = 1000000;

  useEffect(() => {
    // Her 100ms'de bir sayacı güncelle
    const counterInterval = setInterval(() => {
      const now = Date.now();
      const secondsElapsed = (now - SITE_START_DATE) / 1000;
      const totalWasted = Math.floor(secondsElapsed * WASTE_RATE_PER_SECOND);
      setWastedLiters(totalWasted);
    }, 100);

    // Her 500ms'de bir damla oluştur
    const dropInterval = setInterval(() => {
      const randomX = Math.random() * 60 - 30; // -30 ile 30 arası
      const now = Date.now();
      setDrops((prev) => [...prev, { id: nextDropId, x: randomX, startTime: now }]);
      setNextDropId((prev) => prev + 1);

      // Damla düşme süresi sonunda gölet yüksekliğini artır (2 saniye)
      setTimeout(() => {
        setPuddleHeight((prev) => Math.min(prev + 20, 2000));
      }, 2000);

      // Eski damlaları temizle
      setTimeout(() => {
        setDrops((prev) => prev.slice(1));
      }, 2500);
    }, 500);

    return () => {
      clearInterval(counterInterval);
      clearInterval(dropInterval);
    };
  }, [nextDropId]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(2)}T`;
    }
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    }
    return num.toString();
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-12 z-10">
        {/* Musluk */}
        <div className="relative z-10" ref={faucetRef}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Musluk SVG/Icon */}
            <div className="relative">
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-muted-foreground"
              >
                {/* Musluk gövdesi */}
                <rect x="35" y="10" width="10" height="5" rx="2" fill="currentColor" />
                <rect x="30" y="15" width="20" height="8" rx="3" fill="currentColor" />
                <rect x="38" y="23" width="4" height="12" rx="2" fill="currentColor" />
                {/* Musluk ucu */}
                <ellipse cx="40" cy="35" rx="6" ry="3" fill="currentColor" />
              </svg>

              {/* Damlayan su animasyonu */}
              <AnimatePresence>
                {drops.map((drop) => (
                  <motion.div
                    key={drop.id}
                    initial={{ y: 40, x: drop.x, opacity: 1, scale: 1 }}
                    animate={{
                      y: typeof window !== 'undefined' ? window.innerHeight : 1000,
                      opacity: 0.3,
                      scale: 1.2
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute left-1/2 -translate-x-1/2 z-50"
                    style={{ top: 0 }}
                  >
                    <Droplet className="h-5 w-5 text-primary fill-primary/60" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Sayaç */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center space-y-3 relative z-10"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Wasted Water Since Site Launch
          </h3>
          <div className="relative">
            <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {formatNumber(wastedLiters)}
            </div>
            <span className="text-2xl md:text-3xl font-semibold text-muted-foreground ml-2">
              Liters
            </span>
          </div>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Based on global water waste estimates
          </p>
        </motion.div>
      </div>

      {/* Gölet efekti - Sayfanın en dibinden yukarı doğru dolan */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight}px` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-t from-primary/25 via-primary/15 to-primary/5 pointer-events-none"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight * 0.85}px` }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="bg-gradient-to-t from-secondary/20 via-secondary/10 to-transparent pointer-events-none"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight * 0.7}px` }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="bg-gradient-to-t from-accent/15 via-accent/8 to-transparent pointer-events-none"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />

      {/* Su dalgaları efekti */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: puddleHeight > 50 ? 0.4 : 0,
        }}
        transition={{ duration: 1 }}
        className="pointer-events-none"
        style={{
          position: 'fixed',
          bottom: `${puddleHeight}px`,
          left: 0,
          right: 0,
          height: '20px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="h-full w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.div>
    </>
  );
}
