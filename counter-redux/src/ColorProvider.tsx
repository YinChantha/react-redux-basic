import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ColorContextType {
  textcolor: string;
  setTextColor: (color: string) => void;
  iconcolor: string;
  setIconColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error("useColor must be used within a ColorProvider");
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [textcolor, setTextColor] = useState("#ff0000");
  const [iconcolor, setIconColor] = useState("#000000");
  useEffect(() => {
    document.documentElement.style.setProperty("--text-color", textcolor);
    document.documentElement.style.setProperty("--icon-color", iconcolor);
  }, [textcolor,iconcolor]);
return <ColorContext.Provider value={{ textcolor, setTextColor, iconcolor, setIconColor }}>{children}</ColorContext.Provider>;
};