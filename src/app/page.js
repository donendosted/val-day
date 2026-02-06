"use client";

import { useState } from "react";

import InteractiveStatement from "@/components/Interactive";
import QuestionScreen from "@/components/QuestionPage";
import FinalScreen from "@/components/FinalScreen"; // your next screen

export default function Page() {
    const [step, setStep] = useState(0);

    return (
        <>
            {step === 0 && (
                <InteractiveStatement onComplete={() => setStep(1)} />
            )}

            {step === 1 && (
                <QuestionScreen
                    onReachFinal={() => setStep(2)}
                />
            )}

            {step === 2 && <FinalScreen />}
        </>
    );
}
