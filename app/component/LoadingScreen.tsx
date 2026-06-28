'use client'

import { useState, useEffect } from "react"

export default function LoadingScreen({children}: {
    children: React.ReactNode 
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true)
        }, 2000)

        const removeTimer = setTimeout(() => {
            setIsLoading(false)
        }, 2600)

        return () => { 
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, []);

    return (
    <>
        {isLoading && (
            <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-port-dark transition-opacity duration-600 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Animated spinner */}
                <div className="w-12 h-12 border-4 border-port-border border-t-port-highlight rounded-full animate-spin mb-6" />
                
                {/* Brand name */}
                <p className="text-port-highlight font-mono text-lg tracking-widest animate-pulse">
                    ysirnf_
                </p>
            </div>
        )}
        {children}
    </>
    )
}