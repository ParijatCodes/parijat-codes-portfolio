
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy">
              Parijat Kundu
            </h1>
            <div className="h-1 w-24 bg-navy"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
              Aspiring AI Engineer | B.Tech in CSE | Passionate about Data Analysis and Data Science
            </p>
            <p className="text-gray-600 max-w-2xl">
              Developing AI Solutions to Transform Industries. Based in Ranaghat-I, West Bengal, India.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-navy hover:bg-navy-dark text-white">
                Download Resume
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-navy/20 shadow-lg">
              <img 
                src="/public/lovable-uploads/de9f3fe3-a5b0-4b9c-8400-ab17c4274210.png"
                alt="Parijat Kundu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-navy" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
