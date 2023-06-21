'use client'

import { Bebas_Neue } from "next/font/google"
import Link from "next/link"
import { useEffect, useRef } from "react"

const FONT = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
})

const projects = [
    { name: "Sunokitaab Blog Web App", link: "https://sunokitaab.com/blog" },
    { name: "Social Media Clone", link: "https://github.com/mohit4bug/SOCIAL-MEDIA" },
    { name: "Pizza Ordering Web App", link: "https://github.com/mohit4bug/MizzaPizza" },
    { name: "Paralax Next JS Portfolio", link: "https://github.com/mohit4bug/portfolio-v1" },
]

export default function Projects() {

    const project_one_ref = useRef<HTMLAnchorElement>(null)
    const project_two_ref = useRef<HTMLAnchorElement>(null)
    const project_three_ref = useRef<HTMLAnchorElement>(null)
    const project_four_ref = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offSet = window.scrollY
            if (project_one_ref.current
                && project_two_ref.current
                && project_three_ref.current
                && project_four_ref.current) {

                project_one_ref.current.style.transform = `translateX(calc(100vh - ${offSet * 0.92}px))`
                project_two_ref.current.style.transform = `translateX(calc(${offSet}px - 120vh))`
                project_three_ref.current.style.transform = `translateX(calc(150vh - ${offSet * 1}px))`
                project_four_ref.current.style.transform = `translateX(calc(${offSet * 0.68}px - 120vh))`
            }
        })

    }, [])

    return (
        <div className="px-8 overflow-hidden">
            {/* Project */}
            <div className="h-[20vh] xl:h-[40vh] border-t-2 border-b-2 border-neutral-500 flex items-center relative">
                <p className="mini-heading absolute top-6 left-[20%]">Projects (4)</p>
                <Link href={projects[0].link} ref={project_one_ref} className={`${FONT.className}  text-[10vw] text-neutral-500 whitespace-nowrap hover:text-yellow-600 transition-colors duration-500`}>{projects[0].name}</Link>
            </div>
            <div className="h-[20vh] xl:h-[40vh]  border-t-2 border-b-2 border-neutral-500 flex items-center">
                <Link href={projects[1].link} ref={project_two_ref} className={`${FONT.className} text-[10vw] text-neutral-500 whitespace-nowrap hover:text-yellow-600 transition-colors duration-500`}>{projects[1].name}</Link>
            </div>
            <div className="h-[20vh] xl:h-[40vh]  border-t-2 border-b-2 border-neutral-500 flex items-center">
                <Link href={projects[2].link} ref={project_three_ref} className={`${FONT.className} text-[10vw] text-neutral-500 whitespace-nowrap hover:text-yellow-600 transition-colors duration-500`}>{projects[2].name}</Link>
            </div>
            <div className="h-[20vh] xl:h-[40vh]  border-t-2 border-neutral-500 flex items-center">
                <Link href={projects[3].link} ref={project_four_ref} className={`${FONT.className} text-[10vw] text-neutral-500 whitespace-nowrap hover:text-yellow-600 transition-colors duration-500`}>{projects[3].name}</Link>
            </div>
        </div>
    )
}