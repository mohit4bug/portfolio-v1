import Link from "next/link"
import "./button.css"

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="btn-css hover:text-neutral-900 hover:border-yellow-600 transition-all duration-500 relative border-2 border-neutral-500 rounded-full text-neutral-400 uppercase px-2 py-[0.2rem] overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-0 bg-yellow-600 transition-all duration-500 z-[-1]"></span>
            <p className="z-10">{children}</p>
        </button>
    )
}