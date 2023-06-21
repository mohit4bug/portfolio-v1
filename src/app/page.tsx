'use client'

import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Intro from "@/components/intro"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"

export default function Home() {


  return (
    <div className="select-none">
      <Navbar />
      <Intro />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}