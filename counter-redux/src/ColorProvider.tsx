import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error("useColor must be used within a ColorProvider");
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState("#ff0000");
  useEffect(() => {
    document.documentElement.style.setProperty("--text-color", color);
  }, [color]);

  return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>;
};