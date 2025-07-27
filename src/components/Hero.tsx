
import { ArrowDown } from "lucide-react";
import { RippleButton } from "@/components/RippleButton";

export function Hero() {
  return (
    <section id="home" className="min-h-screen gradient-animated flex items-center overflow-hidden parallax">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <h1 className="animate-typing-enhanced text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
              Parijat Kundu
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent animate-[width_1s_ease-out] origin-left rounded-full"></div>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
              Aspiring AI Engineer | B.Tech in CSE | Passionate about Data Analysis and Data Science
            </p>
            <p className="text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "600ms" }}>
              Developing AI Solutions to Transform Industries. Based in Ranaghat-I, West Bengal, India.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <RippleButton className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground">
                Download Resume
              </RippleButton>
              <RippleButton variant="outline" className="btn-animated border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Me
              </RippleButton>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-navy/20 shadow-lg hover:shadow-xl transition-all duration-500 animate-floating img-hover-effect">
              <img alt="Parijat Kundu" src="/lovable-uploads/36ad4c6d-8087-48e8-be0f-407a82eb82f3.jpg" className="w-full h-full object-scale-down" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll down" className="transition-transform hover:scale-125 duration-300">
            <ArrowDown className="text-navy" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
