'use client'

import { Bebas_Neue } from "next/font/google"
import { useEffect, useRef } from "react"

const FONT = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
})

export default function Intro() {
    const fullRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)
    const dashRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offSet = window.scrollY
            if (fullRef.current && stackRef.current && dashRef.current) {
                fullRef.current.style.transform = `translateX(calc(-${offSet * 0.5}px))`
                stackRef.current.style.transform = `translateX(calc(${offSet * 0.5}px))`
                dashRef.current.style.minWidth = `calc(10rem + ${offSet * 0.05}rem)`
            }
        })

    }, [])

    return (
        <main className="min-h-[100vh] px-8 text-neutral-500 relative overflow-x-hidden pb-8 flex  flex-col justify-center">
            {/* FULL - STACK */}
            <div className="text-[20vw] flex  items-center gap-4 leading-none">
                <div className="flex" ref={fullRef}>
                    {Array.from("FULL").map((character: string, index) => (
                        <p className={`${FONT.className}  hover:text-neutral-400 transition-colors duration-200`} key={index}>{character}</p>
                    ))}
                </div>
                <div ref={dashRef} className="hidden xl:block h-6 min-w-[10rem] max-w-[15rem] bg-neutral-500" />

                <div className="flex" ref={stackRef}>
                    {Array.from("STACK").map((character: string, index) => (
                        <p className={`${FONT.className}  hover:text-neutral-400 transition-colors duration-200`} key={index}>{character}</p>
                    ))}
                </div>
            </div>

            {/* DEVELOPER */}
            <div className="text-[20vw] flex justify-between items-center leading-none">
                <div className="flex">
                    {Array.from("DEVELOPER").map((character: string, index) => (
                        <p className={`${FONT.className}  hover:text-neutral-400 transition-colors duration-200`} key={index}>{character}</p>
                    ))}
                </div>
            </div>

            {/* ABOUT */}
            <div className="sm:bottom-10 left-10">
                <p className="mini-heading">ABOUT</p>
                <p className="text-neutral-400 lg:w-1/2">I care deeply about creating world-class, useful, and beautiful products that help people and make a difference.</p>
            </div>
        </main>
    )
}