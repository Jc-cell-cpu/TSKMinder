"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    texts: string[]; // Accept an array of strings
    delay?: number;
    pauseTime?: number; // Pause time between sentences
    className?: string;
}

export function Typewriter({ texts, delay = 30, pauseTime = 2000, className }: TypewriterProps) {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current character index
    const [currentSentence, setCurrentSentence] = useState(0); // Tracks the current sentence index

    useEffect(() => {
        if (currentIndex < texts[currentSentence].length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + texts[currentSentence][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            // Pause before starting the next sentence
            const pauseTimeout = setTimeout(() => {
                setCurrentText(""); // Clear the text for the next sentence
                setCurrentIndex(0);
                setCurrentSentence((prevSentence) => (prevSentence + 1) % texts.length); // Move to the next sentence
            }, pauseTime);

            return () => clearTimeout(pauseTimeout);
        }
    }, [currentIndex, texts, currentSentence, delay, pauseTime]);

    return <span className={className}>{currentText}</span>;
}

