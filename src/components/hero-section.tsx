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
    </section>
  )
}
