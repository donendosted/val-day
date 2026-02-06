"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EmojiRain from "./EmojiRain";

export default function FinalScreen() {
    const [timeLeft, setTimeLeft] = useState(getTimeUntilValentines());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeUntilValentines());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        justify-center
        text-white
        px-6
        text-center
        relative
        overflow-hidden
        bg-gradient-to-br
        from-pink-400
        via-pink-500
        to-rose-500
        font-poppins
      "
        >
            <EmojiRain emoji="💖" setActive={() => {}} />

            {/* Floating content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <img
                    src="/donendosted/favicon.png"
                    alt="love"
                    className="w-auto h-60 mb-6 drop-shadow-xl"
                />

                <h1 className="text-3xl sm:text-4xl font-playfair font-bold mb-3">
                    I knew you'd say yes 🤍
                </h1>

                <p className="max-w-md text-base sm:text-lg opacity-90 leading-relaxed mb-8">
                    Counting every second till Valentine’s Day...<br />
                    Every day till then is special for me.<br />
                    For you. For us. For our first Valentine’s Day hehe 🤭
                    <br /><br />
                    And… baki surprise pore debo when we meet… soon 🥹
                    Just a few moments more...
                </p>

                <div
                    className="
            text-2xl
            sm:text-3xl
            font-mono
            tracking-widest
            bg-white/20
            backdrop-blur
            px-8
            py-4
            rounded-full
            shadow-lg
          "
                >
                    {timeLeft.days}d :
                    {timeLeft.hours}h :
                    {timeLeft.minutes}m :
                    {timeLeft.seconds}s
                </div>
            </motion.div>
        </div>
    );
}

/* 🔧 FIXED DATE */
function getTimeUntilValentines() {
    const now = new Date();

    const year =
        now.getMonth() > 1 ||
        (now.getMonth() === 1 && now.getDate() > 14)
            ? now.getFullYear() + 1
            : now.getFullYear();

    const valentines = new Date(year, 1, 14, 0, 0, 0); // Feb 14

    const diff = valentines - now;

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

    return { days, hours, minutes, seconds };
}
