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
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-kbmk-red font-semibold">
              Sign Up
            </Button>
            <Button className="bg-kbmk-red hover:bg-kbmk-red/90 text-white font-semibold px-6">
              Login
            </Button>
          </div>

          <Button variant="outline" className="md:hidden bg-transparent border-kbmk-red text-kbmk-red">
            Menu
          </Button>
        </nav>
      </div>
    </header>
  )
}
