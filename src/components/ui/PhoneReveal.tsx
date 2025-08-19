import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";

interface PhoneRevealProps {
  phone: string;
  className?: string;
}

export const PhoneReveal = ({ phone, className = "" }: PhoneRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  const maskedPhone = phone.replace(/\d(?=\d{4})/g, "*");
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-mono">
        {isRevealed ? phone : maskedPhone}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsRevealed(!isRevealed)}
        className="h-6 w-6 p-0 hover:bg-white/20"
        aria-label={isRevealed ? "Скрыть номер" : "Показать номер"}
      >
        {isRevealed ? (
          <EyeOff className="w-3 h-3" />
        ) : (
          <Eye className="w-3 h-3" />
        )}
      </Button>
    </div>
  );
};