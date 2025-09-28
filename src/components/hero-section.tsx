<<<<<<< HEAD
"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const aboutImages = [
  { src: "/images/LDK-A.jpg", alt: "Foto About Us 1" },
  { src: "/images/LDK-CP.jpg", alt: "Foto About Us 2" },
  { src: "/images/Benchmarking.jpg", alt: "Foto About Us 3" },
  { src: "/images/Anjangsana.jpg", alt: "Foto About Us 3" },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getPosition = (index: number) => {
    if (index === current) return "z-20 scale-100 translate-x-0 opacity-100"
    if (index === (current + 1) % aboutImages.length)
      return "z-10 scale-75 translate-x-1/3 opacity-60"
    if (index === (current - 1 + aboutImages.length) % aboutImages.length)
      return "z-10 scale-75 -translate-x-1/3 opacity-60"
    return "opacity-0 scale-50"
  }

  return (
    <section id="home" className="bg-kbmk-red py-12 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center overflow-hidden">
          {aboutImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute transition-all duration-700 ease-in-out ${getPosition(idx)}`}
            >
              <div className="relative w-[800px] h-[400px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority={idx === current}
                />
              </div>
            </div>
          ))}

          {/* Bulatan indikator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {aboutImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === current ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

     
    <h2 className="text-5xl font-bold text-white mt-6 ml-8">
  About Us
</h2>

=======
export function HeroSection() {
  return (
    <section id="home" className="bg-kbmk-red py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <img
              src="/group-photo-of-indonesian-students-in-front-of-tra.jpg"
              alt="KBMK Group Photo - Students in front of traditional building"
              className="w-full h-72 md:h-96 object-cover"
              
            />
            
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
        </div>
      </div>
>>>>>>> fe7221a818ac4f912eaf66d00ad65d7595b34aad
    </section>
  )
}
