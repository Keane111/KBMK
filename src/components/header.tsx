<<<<<<< HEAD
import Image from "next/image"
import { Button } from "@/components/ui/button"



export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          
        
          <div className="flex items-center gap-3">
            <Image
              src= "/images/LOGO KBMK.png"
              alt="KBMK Logo"
              width={100}   
              height={30}
              className="object-contain"
              priority
            />
          </div>

          
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-700 hover:text-kbmk-red transition-colors font-semibold">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-kbmk-red transition-colors font-semibold">
              About Us
            </a>
            <a href="#articles" className="text-gray-700 hover:text-kbmk-red transition-colors font-semibold">
              Articles
            </a>
            <a href="#events" className="text-gray-700 hover:text-kbmk-red transition-colors font-semibold">
              Events
            </a>
            <a href="#contact" className="text-gray-700 hover:text-kbmk-red transition-colors font-semibold">
=======
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-kbmk-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-gray-800 text-lg">KBMK</span>
          </div>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-700 hover:text-kbmk-red transition-colors font-bold">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-kbmk-red transition-colors font-bold">
              About Us
            </a>
            <a href="#articles" className="text-gray-700 hover:text-kbmk-red transition-colors font-bold">
              Articles
            </a>
            <a href="#events" className="text-gray-700 hover:text-kbmk-red transition-colors font-bold">
              Events
            </a>
            <a href="#contact" className="text-gray-700 hover:text-kbmk-red transition-colors font-bold">
>>>>>>> fe7221a818ac4f912eaf66d00ad65d7595b34aad
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
<<<<<<< HEAD
            <Button variant="ghost" className="text-gray-700 hover:text-kbmk-red font-semibold">
              Sign Up
            </Button>
            <Button className="bg-kbmk-red hover:bg-kbmk-red/90 text-white font-semibold px-6">
              Login
            </Button>
=======
            <Button variant="ghost" className="text-gray-700 hover:text-kbmk-red font-bold">
              Sign Up
            </Button>
            <Button className="bg-kbmk-red hover:bg-kbmk-red/90 text-white font-bold px-6">Login</Button>
>>>>>>> fe7221a818ac4f912eaf66d00ad65d7595b34aad
          </div>

          <Button variant="outline" className="md:hidden bg-transparent border-kbmk-red text-kbmk-red">
            Menu
          </Button>
        </nav>
      </div>
    </header>
  )
}
