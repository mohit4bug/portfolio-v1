import { useEffect, useRef } from "react"

export default function Experience() {

    const experience_bg_ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offSet = window.scrollY
            if (experience_bg_ref.current) {
                experience_bg_ref.current.style.backgroundPositionY = `${offSet * 1.2}px`
            }
        })

    }, [])

    return (
        <div ref={experience_bg_ref} className="h-[80vh] lg:h-[100vh] sm:bg-[url('/experience-bg.png')] filter invert flex flex-col justify-center lg:items-center px-8">
            <p className="mini-heading">Experience</p>
            <p className="lg:text-center lg:w-[80%] font-semibold text-neutral-700 text-2xl">During my internship at SunoKitaab Pvt Ltd, I had the privilege of working with a diverse range of cutting-edge technologies, including both frontend and backend development. Additionally, I worked on deploying applications utilizing efficient web servers.</p>
        </div>
    )
}