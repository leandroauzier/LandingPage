import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ClientsSection from "@/components/clients-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import DifferentialsSection from "@/components/differentials-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
