import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VisionMission } from "@/components/vission-mission"
import { ArticlesSection } from "@/components/articles-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <ArticlesSection />
      <EventsSection />
      <ContactSection />
    </main>
  )
}
