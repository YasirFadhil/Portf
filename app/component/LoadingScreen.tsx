'use client'

import { useState, useEffect } from "react"

export default function LoadingScreen({children}: {
    children: React.ReactNode 
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const fullText = 'welcome!';

    useEffect(() => {
        // Typing animation
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                setDisplayText(fullText.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);

        const timer = setTimeout(() => {
            setIsFading(true)
        }, 4000)

        const removeTimer = setTimeout(() => {
            setIsLoading(false)
        }, 4600)

        return () => { 
            clearInterval(typingInterval)
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, []);

    return (
    <>
        {isLoading && (
            <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-port-dark transition-opacity duration-600 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Shape morphing loader: square ↔ circle ↔ triangle */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="loader-shape" style={{ animationDelay: '0s' }} />
                    <div className="loader-shape" style={{ animationDelay: '0.5s' }} />
                    <div className="loader-shape" style={{ animationDelay: '1s' }} />
                </div>
                
                {/* Typing brand name */}
                <p className="text-port-highlight font-mono text-lg tracking-widest">
                    {displayText}
                    <span className="inline-block w-[2px] h-[1.1em] bg-port-highlight ml-[2px] align-middle animate-[blink_0.7s_step-end_infinite]" />
                </p>
            </div>
        )}
        {children}
    </>
    )
}