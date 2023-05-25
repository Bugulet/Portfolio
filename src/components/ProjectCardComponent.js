"use client"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import Image from "next/image";

export default function ProjectCardComponent() {

    return (
        <div className="w-screen md:h-auto mx-auto bg-gradient-to-r from-orange-900 to-blue-300 rounded-xl shadow-xl overflow-hidden ">
            <div className="md:flex">
                <div className="md:shrink-0 transition duration-500 md:ease-in-out hover:scale-105">
                    <Image height={500} width={500} className="h-48 w-full object-cover md:h-full md:w-48" src="/images/test-pic.jpg" alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-orange-600 font-semibold">Company retreats</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>
            </div>
        </div>
        
    )
}