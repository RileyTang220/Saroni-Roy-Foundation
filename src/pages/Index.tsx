
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection1";
import StorySection from "@/components/StorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import DirectionSection from "@/components/DirectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // <div className="min-h-screen flex flex-col">
    <div
      className="min-h-screen flex flex-col justify-between"
    >
      <img src="../lovable-uploads/bg1.png" alt="" className="absolute inset-0 object-cover w-full -z-10" />
      <Navbar />
      <main>
        <HeroSection />
        <DirectionSection />
        <StorySection />
        <NewArrivalsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
