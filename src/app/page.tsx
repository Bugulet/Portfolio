import Image from 'next/image'
import ProjectCardComponent from "../components/ProjectCardComponent"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white pt-16">
      <h1 className="text-black text-xl">
          Bugulet
      </h1>
      <header>sdfg</header>
      <ProjectCardComponent />
      <ProjectCardComponent />
      <ProjectCardComponent />
      <ProjectCardComponent />
      <ProjectCardComponent />
      <ProjectCardComponent />

    </main>
  )
}
