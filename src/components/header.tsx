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
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-kbmk-red font-bold">
              Sign Up
            </Button>
            <Button className="bg-kbmk-red hover:bg-kbmk-red/90 text-white font-bold px-6">Login</Button>
          </div>

          <Button variant="outline" className="md:hidden bg-transparent border-kbmk-red text-kbmk-red">
            Menu
          </Button>
        </nav>
      </div>
    </header>
  )
}
