import { Gorditas } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'
import ProjectCardComponent from "../components/ProjectCardComponent"

export default function Home() {
  return (
    <main className=" bg-gradient-to-br from-black to-slate-950  mx-auto min-h-screen">
      <h1 className="text-white text-xl content-center flex justify-center mb-8">
        Bugulet
      </h1>
      
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto">
        <ProjectCardComponent></ProjectCardComponent>
        <ProjectCardComponent></ProjectCardComponent>
        <ProjectCardComponent></ProjectCardComponent>
        <ProjectCardComponent></ProjectCardComponent>
        <ProjectCardComponent></ProjectCardComponent>
      </div>
    </main>
  )
}
