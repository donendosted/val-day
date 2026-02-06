"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = [
    "Hey!",
    "Soo..... I have a question",
    "Sorry for being sooooooo late... ",
    "You already know the question tho 😭",
    "You don't love me ik 😔",
    "hehehe kidding.... You love me alottttttttttttt",
    "and I love moreee mumma...... so....",
    "here's the question -"
];

export default function InteractiveStatement({ onComplete }) {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index === DATA.length - 1) {
            onComplete();
        } else {
            setIndex(i => i + 1);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f14] text-white text-center px-6">

            <AnimatePresence mode="wait">
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="
            mb-10
            font-semibold
            text-2xl
            sm:text-3xl
            md:text-4xl
            leading-tight
          "
                >
                    {DATA[index]}
                </motion.h1>
            </AnimatePresence>

            <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={next}
                className="
          bg-pink-500
          hover:bg-pink-600
          active:bg-pink-700
          text-white
          rounded-full
          px-8
          py-3
          text-sm
          sm:text-base
          md:text-lg
          font-medium
          shadow-lg
          transition-colors
        "
            >
                Next →
            </motion.button>

        </div>
    );
}
