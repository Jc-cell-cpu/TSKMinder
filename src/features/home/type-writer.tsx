"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    texts: string[]; // Accept an array of strings
    delay?: number;
    pauseTime?: number; // Pause time between sentences
    fadeDuration?: number; // Duration for fade-out and fade-in effects
    className?: string;
}

export function Typewriter({
    texts,
    delay = 30,
    pauseTime = 2000,
    fadeDuration = 500,
    className
}: TypewriterProps) {
    const [currentText, setCurrentText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current character index
    const [currentSentence, setCurrentSentence] = useState(0); // Tracks the current sentence index
    const [isFadingOut, setIsFadingOut] = useState(false); // Tracks the fade-out state

    useEffect(() => {
        if (isFadingOut) {
            const fadeOutTimeout = setTimeout(() => {
                setDisplayText(""); // Clear the display text after fade-out
                setIsFadingOut(false);
                setCurrentText("");
                setCurrentIndex(0);
                setCurrentSentence((prevSentence) => (prevSentence + 1) % texts.length);
            }, fadeDuration);

            return () => clearTimeout(fadeOutTimeout);
        } else if (currentIndex < texts[currentSentence].length) {
            const typeTimeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + texts[currentSentence][currentIndex]);
                setDisplayText((prevText) => prevText + texts[currentSentence][currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(typeTimeout);
        } else {
            // Pause before fading out
            const pauseTimeout = setTimeout(() => {
                setIsFadingOut(true);
            }, pauseTime);

            return () => clearTimeout(pauseTimeout);
        }
    }, [currentIndex, texts, currentSentence, delay, pauseTime, isFadingOut, fadeDuration]);

    return (
        <span
            className={className}
            style={{
                opacity: isFadingOut ? 0 : 1,
                transition: `opacity ${fadeDuration}ms ease`
            }}
        >
            {displayText}
        </span>
    );
}
