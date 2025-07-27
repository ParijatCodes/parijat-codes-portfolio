
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-14 h-14 border-4'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={cn(
          "loading-spinner", 
          sizeClasses[size],
          className
        )}
      ></div>
    </div>
  );
}

export default LoadingSpinner;
