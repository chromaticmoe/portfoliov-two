'use client';

import Header from "@/app/components/header/header";
import About from "@/app/components/about/about";
import ParticlesBackground from "@/app/components/particles-js/particlesbackground";
import Work from "@/app/components/work/work";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <section className="lg:mb-0 mb-24" id="about">
        <About />
      </section>
      <section className="lg:mb-0 mb-24" id="work">
        <Work />
      </section>
      <section className="lg:mb-0 mb-24" id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
    
  )
}
