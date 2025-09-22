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
      </div>
    </section>
  )
}
