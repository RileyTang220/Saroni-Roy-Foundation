import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 lg:gap-x-28">
          <div>
            <h2 className="text-xl font-bold mb-6 text-white tracking-tight">Super Naari</h2>
            <p className="text-white/70 mb-6">
              Connect With us on
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/restrecoverywellness/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/restrecoverywellness/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/restrecoverywellness/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/restrecoverywellness/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/restrecoverywellness/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">License Opportunities</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Products</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Locations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Press</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Privacy Policy</a></li>
              <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Terms of Service</a></li>
              <li><a href="/license-disclosure" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">License Disclosure</a></li>
              <li><a href="/accessibility" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Accessibility</a></li>
              <li><a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Cookie Policy</a></li>
            </ul>
          </div> */}
          
          <div className="w-full max-w-[420px] mx-auto">
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Subscribe for our newsletter.</h3>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="First Name"
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
              />
              <Input
                type="email"
                placeholder="Last Name"
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
              />
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
              />
              <Button variant="secondary" className="bg-white text-black hover:bg-white/90 rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} Saroni Roy Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
