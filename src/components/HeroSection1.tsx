import { useState, useEffect } from "react";
import { ArrowRight, Play, MapPin, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setStatsCounter(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    setTimeout(() => clearInterval(interval), 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex flex-col items-center space-between text-center px-6 pt-12 pb-4 min-h-screen">
        <div className="p-2 rounded-xl">
          <img src="../../public/lovable-uploads/midlogo.png" alt="" className="h-60 object-contain" />
        </div>

        <h3 className="text-4xl md:text-4xl font-bold text-yellow-400 p-3 rounded-md">
          A Period Equity Initiative
        </h3>

        <p className="text-center max-w-xl mt-4 text-lg text-gray-200 italic p-3 rounded-lg">
          “Building a digital ecosystem for menstrual health, bridging ancient
          wisdom with modern healthcare”
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center w-full mt-40 px-8">
          <div className="flex gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-6 rounded-md shadow-md" onClick={() => scrollToSection('vision')}>
              Explore Platform
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => scrollToSection('intro')} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-6 rounded-md shadow-md">
              Watch Introduction
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <Button onClick={() => scrollToSection('/')} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-6 rounded-md shadow-md">
            Download E-book
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
  );
};

export default HeroSection;