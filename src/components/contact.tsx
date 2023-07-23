import Link from "next/link"
import { Bebas_Neue } from "next/font/google"
import Marquee from "react-fast-marquee"
import Button from "./button"

const FONT = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
})


export default function Contact() {
    return (
        <div className="px-8">
            <div className="h-[40vh] flex items-center justify-center">
                <p className="text-center lg:w-1/3 mini-heading">Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
            </div>
            <div className="h-[40vh]">
                <div className="h-full border-t-2 border-b-2 border-neutral-500 flex items-center relative justify-center">
                    <Marquee pauseOnHover speed={100}>
                        <Link href="mailto:mohit4bug@gmail.com" className={`${FONT.className} text-[12vw] text-neutral-500 whitespace-nowrap hover:text-yellow-600 transition-colors duration-500`}>Email Me - Let&apos;s Talk - Say Hello - Let&apos;s collab &nbsp;</Link>
                    </Marquee>
                </div>
            </div>
            <div className="h-[30vh] py-6 flex flex-col justify-between items-center">
                <h1 className="text-neutral-400 font-medium text-center text-2xl">mohit4bug@gmail.com</h1>
                <div className="flex items-center gap-2">
                    <Button>
                        <Link href="https://www.instagram.com/mohit4bug/">
                            Instagram
                        </Link>
                    </Button>
                    <Button>
                        <Link href="https://www.linkedin.com/in/mohit4bug/">
                            LinkedIn
                        </Link>
                    </Button>

                    <Button>
                        <Link href="https://github.com/mohit4bug">
                            Github
                        </Link>
                    </Button>
                </div>
            </div>
        </div >
    )
}
