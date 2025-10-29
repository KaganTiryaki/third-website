"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet } from "lucide-react";

export function WaterWasteCounter() {
  const [wastedLiters, setWastedLiters] = useState(0);
  const [drops, setDrops] = useState<{ id: number; x: number; startTime: number }[]>([]);
  const [nextDropId, setNextDropId] = useState(0);
  const [puddleHeight, setPuddleHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // Açık/kapalı
  const [pageHeight, setPageHeight] = useState(0);
  const faucetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Saniyede israf edilen su: 40 ton = 40,000 litre
  const WASTE_RATE_PER_SECOND = 40000;

  useEffect(() => {
    // Sayfa yüksekliğini ve musluk pozisyonunu hesapla
    if (typeof window !== 'undefined') {
      const updatePositions = () => {
        // Tüm sayfa yüksekliği
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        setPageHeight(docHeight);
      };

      // İlk yükleme
      setTimeout(updatePositions, 100);

      // Resize ve scroll olaylarını dinle
      window.addEventListener('resize', updatePositions);
      window.addEventListener('load', updatePositions);

      // DOM değişikliklerini izle
      const observer = new MutationObserver(updatePositions);
      observer.observe(document.body, { childList: true, subtree: true, attributes: true });

      return () => {
        window.removeEventListener('resize', updatePositions);
        window.removeEventListener('load', updatePositions);
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    // Her saniye sayacı 40,000 litre artır - Ayrı useEffect
    const counterInterval = setInterval(() => {
      setWastedLiters((prev) => prev + WASTE_RATE_PER_SECOND);
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, []); // Boş dependency array - sadece mount olduğunda çalışır

  useEffect(() => {
    // Damla oluşturma - açıksa
    let dropInterval: NodeJS.Timeout | null = null;

    if (isOpen) {
      dropInterval = setInterval(() => {
        const randomX = Math.random() * 60 - 30; // -30 ile 30 arası
        const now = Date.now();
        setDrops((prev) => [...prev, { id: nextDropId, x: randomX, startTime: now }]);
        setNextDropId((prev) => prev + 1);

        // Damla düşme süresi sonunda gölet yüksekliğini artır
        setTimeout(() => {
          setPuddleHeight((prev) => {
            // Tüm sayfayı doldursun
            const maxHeight = pageHeight > 0 ? pageHeight : 3000;
            return Math.min(prev + 20, maxHeight);
          });
        }, 1000);

        // Eski damlaları temizle
        setTimeout(() => {
          setDrops((prev) => prev.slice(1));
        }, 1500);
      }, 200);
    }

    return () => {
      if (dropInterval) clearInterval(dropInterval);
    };
  }, [nextDropId, isOpen, pageHeight]);

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
      <div ref={containerRef} className="relative flex flex-col items-center justify-center py-6" style={{ zIndex: 9999, position: 'relative' }}>
        {/* Musluk */}
        <div className="relative z-10" ref={faucetRef}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Musluk Icon - Tıklanabilir */}
            <div
              className="relative group cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              title={isOpen ? "Click to close faucet" : "Click to open faucet"}
            >
              <motion.svg
                width="100"
                height="80"
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all drop-shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <defs>
                  <linearGradient id="faucetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                </defs>

                {/* Wall mount */}
                <circle cx="20" cy="30" r="8" fill="#64748b" />
                <circle cx="20" cy="30" r="3" fill="#475569" />

                {/* Faucet body - simple curved pipe */}
                <path
                  d="M 20 30 L 40 30 Q 55 30 55 45 L 55 55"
                  stroke="url(#faucetGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Faucet spout */}
                <ellipse cx="55" cy="55" rx="6" ry="3" fill="#64748b" />

                {/* Handle with rotation */}
                <motion.g
                  animate={{
                    rotate: isOpen ? 0 : -90,
                  }}
                  style={{ originX: "55px", originY: "40px" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <line
                    x1="55"
                    y1="40"
                    x2="75"
                    y2="40"
                    stroke="#3b82f6"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="75" cy="40" r="4" fill="#2563eb" />
                </motion.g>

                {/* Center pivot */}
                <circle cx="55" cy="40" r="4" fill="#475569" />

                {/* Water stream when open */}
                {isOpen && (
                  <motion.path
                    d="M 54 58 L 52 70 L 56 70 L 54 58"
                    fill="#3b82f6"
                    opacity="0.7"
                    animate={{
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.svg>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 -z-10 blur-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Damlayan su animasyonu */}
              <AnimatePresence>
                {drops.map((drop) => (
                  <motion.div
                    key={drop.id}
                    initial={{ y: 60, x: drop.x, opacity: 1, scale: 1 }}
                    animate={{
                      y: pageHeight > 0 ? pageHeight : 1500,
                      x: drop.x,
                      opacity: [1, 0.7, 0.3],
                      scale: [1, 1.1, 1.3]
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    className="absolute z-50"
                    style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <Droplet className="h-5 w-5 text-primary fill-primary/60" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-3 text-center"
            >
              <p className="text-sm text-muted-foreground">
                {isOpen ? "Click to close the faucet" : "Click to open the faucet"}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Sayaç */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-center space-y-2 relative z-10"
        >
          <motion.h3
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Wasted Water Since Site Launch
          </motion.h3>
          <div className="relative">
            <motion.div
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {formatNumber(wastedLiters)}
            </motion.div>
            <motion.span
              className="text-2xl md:text-3xl font-semibold text-muted-foreground ml-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Liters
            </motion.span>
          </div>
          <motion.p
            className="text-xs text-muted-foreground max-w-md mx-auto"
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Based on global water waste estimates
          </motion.p>
        </motion.div>
      </div>

      {/* Gölet efekti - Sayfanın en dibinden yukarı doğru dolan */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight}px` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-t from-primary/60 via-primary/40 to-primary/10 pointer-events-none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight * 0.9}px` }}
        transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
        className="bg-gradient-to-t from-secondary/50 via-secondary/30 to-transparent pointer-events-none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${puddleHeight * 0.8}px` }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="bg-gradient-to-t from-accent/40 via-accent/20 to-transparent pointer-events-none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
    </>
  );
}
