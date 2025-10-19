
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection1";
import StorySection from "@/components/StorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import DirectionSection from "@/components/DirectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FullScreenCarousel from "@/components/FullScreenCarousel";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* full screen carousel background */}
      <div className="fixed inset-0 z-0">
        <FullScreenCarousel />
      </div>
      
      {/* carousel control buttons - independent layer */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const prevBtn = carousel.querySelector('[data-action="prev"]');
                if (prevBtn) (prevBtn as HTMLButtonElement).click();
              }
            }}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label="previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const nextBtn = carousel.querySelector('[data-action="next"]');
                if (nextBtn) (nextBtn as HTMLButtonElement).click();
              }
            }}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label="next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const indicators = carousel.querySelectorAll('[data-slide]');
                if (indicators[0]) (indicators[0] as HTMLButtonElement).click();
              }
            }}
            className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
            aria-label="jump to the 1st image"
          />
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const indicators = carousel.querySelectorAll('[data-slide]');
                if (indicators[1]) (indicators[1] as HTMLButtonElement).click();
              }
            }}
            className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
            aria-label="jump to the 2nd image"
          />
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
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
    </div>
  );
};

export default Index;
