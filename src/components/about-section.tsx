"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Logo */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/images/LOGO KBMK.png"
                alt="KBMK BINUS Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Penjelasan */}
          <div className="flex ">
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl  max-w-lg">
              Keluarga Besar Mahasiswa Khonghucu (KBMK) merupakan organisasi atau
              wadah kerohanian yang secara langsung melayani mahasiswa Binus
              University yang beragama Khonghucu dan juga untuk memperdalam
              pemahaman tentang agama Khonghucu.
            </p>
          </div>

          {/* Divisi */}
          <div className="flex justify-center items-center">
            <div className="space-y-6 text-center">
              <div className="flex items-center  gap-3">
                <div className="w-3 h-3 bg-kbmk-red"></div>
                <span className="text-base md:text-lg font-medium text-gray-800">
                  PUBLIC RELATION & ENTREPRENEURSHIP
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-kbmk-red"></div>
                <span className="text-base md:text-lg font-medium text-gray-800">
                  RESOURCES EDUCATION & DEVELOPMENT
                </span>
              </div>
              <div className="flex  gap-3">
                <div className="w-3 h-3 bg-kbmk-red"></div>
                <span className="text-base md:text-lg font-medium text-gray-800">
                  DESIGN & SOCIAL MEDIA
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[350px] overflow-hidden shadow-lg rounded-lg">
              <Image
                src="/images/LDK-CP.jpg"
                alt="KBMK Team Photo"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-4 -left-6 bg-kbmk-red text-white px-4 py-2 rounded shadow">
              <div className="text-center">
                <div className="text-lg font-bold">3</div>
                <div className="text-xs">Divisions</div>
              </div>
            </div>

            <div className="absolute top-4 -right-6 bg-kbmk-red text-white px-4 py-2 rounded shadow">
              <div className="text-center">
                <div className="text-lg font-bold">2</div>
                <div className="text-xs">Region</div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-8 bg-kbmk-red text-white px-5 py-2 rounded shadow">
              <div className="text-center">
                <div className="text-lg font-bold">22</div>
                <div className="text-xs">Staff & Activist</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
