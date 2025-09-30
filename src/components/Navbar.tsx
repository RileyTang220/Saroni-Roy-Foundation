
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// // Locations data - organized by state
// const webLocations = [
//   // Arizona
//   {
//     city: "Buckeye",
//     state: "AZ",
//     website: "https://www.RestRecoveryBuckeye.com"
//   }, {
//     city: "Chandler",
//     state: "AZ",
//     website: "https://www.RestRecoveryChandler.com"
//   }, {
//     city: "Gilbert",
//     state: "AZ",
//     website: "https://www.RestRecoveryGilbert.com"
//   }, {
//     city: "North Phoenix",
//     state: "AZ",
//     website: "https://www.RestRecoveryNorthPhoenix.com"
//   },
//   // California
//   {
//     city: "Oceanside",
//     state: "CA",
//     website: "https://www.RestRecoverySandiego.com"
//   }, {
//     city: "Roseville",
//     state: "CA",
//     website: "https://www.RestRecoveryRoseville.com"
//   },
//   // Colorado
//   {
//     city: "Denver",
//     state: "CO",
//     website: "https://www.RestRecoveryDenver.com"
//   }, {
//     city: "Superior",
//     state: "CO",
//     website: "https://www.restrecoverysuperior.com"
//   },
//   // Florida
//   {
//     city: "Fort Walton",
//     state: "FL",
//     website: "https://www.RestRecoveryFortWalton.com"
//   },
//   // Idaho
//   {
//     city: "Meridian",
//     state: "ID",
//     website: "https://www.RestRecoveryMeridian.com"
//   },
//   // Massachusetts
//   {
//     city: "Groton",
//     state: "MA",
//     website: "https://www.RestRecoveryGroton.com"
//   },
//   // Mississippi
//   {
//     city: "Gluckstadt",
//     state: "MS",
//     website: "https://www.RestRecoveryGluckstadt.com"
//   }, {
//     city: "Jackson",
//     state: "MS",
//     website: "https://www.RestRecoveryJackson.com"
//   },
//   // New Jersey
//   {
//     city: "Wayne",
//     state: "NJ",
//     website: "https://www.restrecovrywayne.com"
//   },
//   // Oregon
//   {
//     city: "Portland",
//     state: "OR",
//     website: "https://www.RestRecoveryPortland.com"
//   },
//   // Texas
//   {
//     city: "San Antonio",
//     state: "TX",
//     website: "https://www.RestRecoverySanAntonio.com"
//   },
//   // Utah
//   {
//     city: "Bountiful",
//     state: "UT",
//     website: "https://www.RestRecoveryBountiful.com"
//   }, {
//     city: "Ephraim",
//     state: "UT",
//     website: "https://www.RestRecoveryEphraim.com"
//   },
//   // Virginia
//   {
//     city: "Ashburn",
//     state: "VA",
//     website: "https://www.restrecoveryvirginia.com"
//   }
// ];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.error(`Error scrolling to ${sectionId}:`, error);
      // Fallback for cross-origin issues
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: yOffset, behavior: 'smooth'});
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center space-x-3">
          {/* Updated logo - clickable to go home */}
          <Link to="/">
            <img 
              src="/lovable-uploads/Black-Gold.png" 
              alt="SuperNaari Logo" 
              className="h-24 w-24 object-contain hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-semibold transition-colors relative
            ${isActive
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-8 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`
            }
          >
            Home
          </NavLink>

          <NavLink
          to="/licensee"
          end
            className={({ isActive }) =>
              `font-medium transition-colors relative
            ${isActive
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-8 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`
            }
          >
            Vision
          </NavLink>

          <NavLink
            to="/shop"
            end
            className={({ isActive }) =>
              `font-medium transition-colors relative
            ${isActive
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-8 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`
            }
          >
            Platform
          </NavLink>

          <NavLink
            to="/news"
            end
            className={({ isActive }) =>
              `font-medium transition-colors relative
            ${isActive
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-8 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`
            }
          >
            News
          </NavLink>
          
          <NavLink
            to="/involve"
            end
            className={({ isActive }) =>
              `font-medium transition-colors relative
            ${isActive
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-8 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`
            }
          >
            Involve
          </NavLink>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button 
            type="button"
            onClick={() => {}}
            className="bg-[#c9a300] text-black hover:bg-white/90 rounded-full px-6"
          >
            Download Brochure
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg w-full shadow-lg py-6 border-t border-white/10 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-2 px-4">
            <Link 
              to="/"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Home
            </Link>
            <Link 
              to="/licensee"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Licensee
            </Link>
            <Link 
              to="/shop"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Shop
            </Link>
            {/* Mobile Locations */}
            {/* <div className="bg-white/5 rounded-lg px-4 py-3">
              <p className="font-medium text-white/90 text-lg mb-2">Locations</p>
              <div className="grid grid-cols-1 gap-1 max-h-48 overflow-y-auto">
                {webLocations.map((location, idx) => (
                  <a
                    key={idx}
                    href={location.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-1 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                  >
                    {location.city}, {location.state}
                  </a>
                ))}
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  Louisiana - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  New York - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  South Carolina - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  Chicago, IL - Coming 2026
                </div>
              </div>
            </div> */}
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full w-full mt-2 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
