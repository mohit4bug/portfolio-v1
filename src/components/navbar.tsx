import Button from '@/components/button'

export default function Navbar() {

    const handleClick = () => {
        window.scrollTo(0, 5000)
    }

    return (
        <nav className="px-8 h-auto py-4 flex items-center flex-wrap gap-4">
            <span className="flex flex-col uppercase text-sm font-medium text-neutral-400">
                <p>Mohit</p>
                <p>Khatri</p>
            </span>
            <span className="flex flex-col mini-heading ml-auto">
                <p>Full Stack</p>
                <p>Developer</p>
            </span>
            <span className="flex flex-col mini-heading sm:ml-auto">
                <p>Available for Work</p>
                <p>Remote / In-office</p>
            </span>
            <span className='ml-auto' onClick={handleClick}>
                <Button>Contact</Button>
            </span>
        </nav>
    )
}