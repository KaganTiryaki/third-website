"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export function WaterDrops() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops: Drop[] = [];
      for (let i = 0; i < 15; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 2,
          size: 4 + Math.random() * 8,
        });
      }
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute"
          style={{
            left: `${drop.x}%`,
            top: "-10%",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full blur-sm"
            style={{
              width: `${drop.size}px`,
              height: `${drop.size * 1.5}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
