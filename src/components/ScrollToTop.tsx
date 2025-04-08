
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={cn(
        "fixed bottom-6 right-6 z-50 p-2 bg-navy text-white rounded-full shadow-lg transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      disabled={!isVisible}
    >
      <ArrowUp size={24} />
    </button>
  );
}
