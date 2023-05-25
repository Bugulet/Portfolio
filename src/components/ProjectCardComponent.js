"use client"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import Image from "next/image";

export default function ProjectCardComponent() {

    return (
        <div className=" p-4 shadow-2 rounded-lg rounded-tl-3xl rounded-br-3xl border-2 bg-black shadow-sm shadow-cyan-600 
        hover:shadow-2xl
        xl:skew-x-1 hover:lg:skew-x-3 hover:scale-95 hover:z-50 transition duration-300 ">

            <div className="mb-5 flex flex-col">
                <img src={"https://picsum.photos/500/500"} className="  rounded-lg rounded-tl-3xl rounded-br-3xl w-full object-fill min-h-0 max-h-96 "></img>
            </div>

            <div className="text-3xl font-medium text-900 mb-3">Card Title</div>
            <div className="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>

    )
}