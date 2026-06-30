'use client'
import { useState, useEffect } from "react"
export default function LoadingScreen({children}: {
    children: React.ReactNode 
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isShapeFading, setIsShapeFading] = useState(false);
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
        }, 200);
        // Step 1: shape hilang duluan
        const shapeFadeTimer = setTimeout(() => {
            setIsShapeFading(true)
        }, 4200)
        // Step 2: teks ganti jadi "done!" tepat sebelum background fade
        const doneTextTimer = setTimeout(() => {
            setDisplayText('done!')
        }, 4800)
        // Step 3: background loading screen fade out terakhir
        const timer = setTimeout(() => {
            setIsFading(true)
        }, 5200)
        const removeTimer = setTimeout(() => {
            setIsLoading(false)
        }, 6000)
        return () => { 
            clearInterval(typingInterval)
            clearTimeout(shapeFadeTimer)
            clearTimeout(doneTextTimer)
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, []);
    return (
    <>
        {isLoading && (
            <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-port-dark transition-opacity duration-600 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Shape morphing loader: square ↔ circle ↔ triangle */}
                <div className={`flex items-center gap-3 mb-8 transition-opacity duration-400 ${isShapeFading ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="loader-shape" style={{ animationDelay: '0.5s' }} />
                    <div className="loader-shape" style={{ animationDelay: '1s' }} />
                    <div className="loader-shape" style={{ animationDelay: '1.5s' }} />
                </div>
                
                {/* Typing brand name, nanti berubah jadi "done!" */}
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
