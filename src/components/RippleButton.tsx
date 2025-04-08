
import React, { useState } from 'react';
import { Button, ButtonProps } from "@/components/ui/button";

interface RippleButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function RippleButton({ children, className, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ left: number; top: number; id: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Calculate ripple position relative to the button
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    
    // Add a new ripple with unique id
    const id = Date.now();
    setRipples([...ripples, { left, top, id }]);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      setRipples(currRipples => currRipples.filter(ripple => ripple.id !== id));
    }, 600);
    
    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button 
      {...props} 
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.left,
            top: ripple.top,
          }}
        />
      ))}
    </Button>
  );
}

export default RippleButton;
