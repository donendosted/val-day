"use client";

import { useState } from "react";

import YesButton from "@/components/GrowButton";
import NoButton from "./NoButton";
import EmojiRain from "./EmojiRain";

export default function QuestionScreen({ onReachFinal }) {
    const [showRain, setShowRain] = useState(false);

    return (
        <div
            className="
        min-h-screen
        flex flex-col items-center justify-center
        px-6
        text-white
        bg-gradient-to-br
        from-[#1a0f1f]
        via-[#140f2b]
        to-[#0f172a]
        overflow-hidden
        relative
      "
        >
            {showRain && <EmojiRain emoji="💖" setActive={setShowRain} />}

            <div className="absolute w-[420px] h-[420px] bg-pink-500/20 rounded-full blur-[120px]" />

            <h1
                className="
          relative
          text-center
          font-semibold
          tracking-tight
          mb-12
          text-3xl
          sm:text-4xl
          md:text-5xl
          drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]
        "
            >
                Would you be my Valentine? plss
            </h1>

            <div className="relative flex flex-col sm:flex-row gap-6">

                <YesButton
                    onClick={() => setShowRain(true)}
                    onMaxClicks={onReachFinal}
                />

                <NoButton />

            </div>
        </div>
    );
}
