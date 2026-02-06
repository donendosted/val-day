"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function EmojiRain({ emoji = "💖", setActive }) {
    const EMOJI_COUNT = 50;
    const DURATION = 3;

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(false);
        }, DURATION * 1000);

        return () => clearTimeout(timer);
    }, [setActive]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: EMOJI_COUNT }).map((_, i) => {
                const startX = Math.random() * 100;
                const delay = Math.random() * 0.5;

                return (
                    <motion.div
                        key={i}
                        initial={{ y: "-10%", x: `${startX}vw`, opacity: 1 }}
                        animate={{ y: "110%", opacity: 0 }}
                        transition={{
                            duration: DURATION,
                            delay,
                            ease: "easeIn"
                        }}
                        className="absolute text-3xl select-none"
                    >
                        {emoji}
                    </motion.div>
                );
            })}
        </div>
    );
}
