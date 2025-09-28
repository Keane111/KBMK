<<<<<<< HEAD
"use client"

import { Eye, Target } from "lucide-react"

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-white py-16 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 space-y-12 text-center">
        
        {/* Vision */}
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-kbmk-red text-kbmk-red">
              <Eye size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-kbmk-red">Vision</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Membangun pribadi Khonghucu yang unggul di dunia universitas maupun di luar dunia universitas.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-kbmk-red text-kbmk-red">
              <Target size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-kbmk-red">Mission</h3>
          <ul className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base text-left space-y-2 list-decimal list-inside">
            <li>Mewujudkan organisasi yang mana setiap anggota dapat saling menjaga ikatan persaudaraan antar umat Khonghucu di KBMK.</li>
            <li>Mewujudkan kualitas hidup mahasiswa KBMK BINUS University yang berprestasi, berkarakter dan memperkuat nilai-nilai kebudayaan yang luhur.</li>
            <li>Mewujudkan pengembangan mutu dan intelektual mahasiswa dalam ilmu pengetahuan internasional berlandaskan semangat ajaran Khonghucu.</li>
            <li>Mewujudkan KBMK BINUS University sebagai organisasi kerohanian berdedikasi dan peduli terhadap lingkungan sosial dalam memperkuat hubungan kemanusiaan.</li>
          </ul>
        </div>
         <div className="pt-8 border-t border-gray-200">
       
        </div>
       <h2 className="text-5xl font-bold text-black mt-6 text-left">
  Articles
</h2>

=======
import { Target, Eye } from "lucide-react"

export function VisionMission() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Vision & Mission</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Membangun pribadi Khonghucu yang unggul di dunia universitas maupun dunia dunia universitas.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Mission</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <p className="text-muted-foreground">
                  Menyediakan wadah bagi mahasiswa yang ingin belajar lebih dalam tentang agama Khonghucu di KBMK.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <p className="text-muted-foreground">
                  Memberikan kontribusi positif mahasiswa KBMK BINUS University kepada masyarakat.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <p className="text-muted-foreground">
                  Menyediakan pengembangan diri dan intelektual mahasiswa dalam dan pengembangan karakter mahasiswa
                  berdasarkan ajaran agama Khonghucu.
                </p>
              </div>
            </div>
          </div>
        </div>
>>>>>>> fe7221a818ac4f912eaf66d00ad65d7595b34aad
      </div>
    </section>
  )
}
