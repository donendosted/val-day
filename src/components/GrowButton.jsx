"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GrowingButton({
                                          onClick,
                                          onMaxClicks,
                                          onFullScreen
                                      }) {
    const START_SIZE = 64;
    const GROW_BY = 10;
    const MAX_CLICKS = 10;

    const [size, setSize] = useState(START_SIZE);
    const [clicks, setClicks] = useState(0);
    const [label, setLabel] = useState("Yes");

    const handleClick = () => {
        setSize(s => s + GROW_BY);
        setClicks(c => c + 1);

        onClick?.(); // notify parent every click

        if (clicks === 0) {
            setLabel("Sure?");
        }
    };

    useEffect(() => {
        if (clicks >= MAX_CLICKS) {
            onMaxClicks?.();     // show dialog
            onFullScreen?.();   // optional screen change
        }
    }, [clicks, onMaxClicks, onFullScreen]);

    const glowStrength = Math.min(size / 6, 60);

    return (
        <motion.button
            onClick={handleClick}
            animate={{
                width: size,
                height: size,
                boxShadow: `0 0 ${glowStrength}px rgba(236,72,153,0.6)`
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}

            {...(clicks >= 5 && {
                animate: {
                    width: size,
                    height: size,
                    boxShadow: `0 0 ${glowStrength}px rgba(236,72,153,0.6)`,
                    scale: [1, 1.06, 1]
                },
                transition: {
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    duration: 0.6
                }
            })}

            className="
        z-20
        bg-neutral-800
        border border-neutral-600
        text-white
        rounded-full
        text-sm sm:text-base
        font-medium
        cursor-pointer
        select-none
        active:scale-95
        shadow-lg
        flex items-center justify-center
      "
        >
            {label}
        </motion.button>
    );
}
