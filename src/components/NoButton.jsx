"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NoButton({ onClick }) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dodgePower, setDodgePower] = useState(30);
    const [label, setLabel] = useState("NO");
    const [clicks, setClicks] = useState(0);

    const dodge = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
        const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const dx = x - centerX;
        const dy = y - centerY;

        setOffset({
            x: dx > 0 ? -dodgePower : dodgePower,
            y: dy > 0 ? -dodgePower : dodgePower
        });
    };

    const reset = () => {
        setOffset({ x: 0, y: 0 });
    };

    const handleClick = () => {
        setClicks(c => c + 1);
        setDodgePower(p => p + 12); // stronger dodge

        if (clicks === 0) {
            setLabel("plsss");
        }

        onClick?.();
    };

    return (
        <motion.button
            onClick={handleClick}
            onPointerEnter={dodge}
            onTouchStart={dodge}
            onPointerLeave={reset}
            onTouchEnd={reset}
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}

            whileTap={{
                x: [0, -6, 6, -6, 6, 0],
                transition: { duration: 0.25 }
            }}

            className="
        bg-neutral-800
        border border-neutral-600
        text-white
        px-5 py-3
        rounded-full
        text-sm sm:text-base
        font-medium
        cursor-pointer
        select-none
        active:scale-95
      "
        >
            {label}
        </motion.button>
    );
}
