import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Welcome to Contact Us ! </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to</h3>
            <h4 className="text-xl font-bold text-foreground mb-8">contact us !</h4>

            <div className="space-y-4 mb-8">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Phone className="w-5 h-5" />
                +62 812-3456-7890
              </Button>

              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Mail className="w-5 h-5" />
                @kbmk_binus
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-primary-foreground font-bold text-sm">K</span>
                  </div>
                  <div className="text-xs text-foreground font-medium">KBMK</div>
                  <div className="text-xs text-muted-foreground">BINUS UNIVERSITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
