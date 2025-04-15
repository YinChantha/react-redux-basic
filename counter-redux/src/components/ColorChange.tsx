import { ChangeEvent } from "react";
import { useColor } from "../ColorProvider";

const ColorChante = () => {
  const { textcolor, setTextColor, iconcolor, setIconColor } = useColor();

  const handleTextColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleIconColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIconColor(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col mt-3">
        <p className="font-bold">Text Color</p>
        <div className="border-1 border-gray-300 rounded-xl p-2 w-full flex justify-between">
          <div className="relative">
            <input
              type="color"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              value={textcolor}
              onChange={handleTextColorChange}
            />
            <div
              className="w-6 h-6 rounded-full border-0"
              style={{ backgroundColor: textcolor }}
            ></div>
          </div>
          {textcolor}
        </div>
        <p className="font-bold">Icon Color</p>
        <div className="border-1 border-gray-300 rounded-xl p-2 w-full flex justify-between">
          <div className="relative">
            <input
              type="color"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              value={iconcolor}
              onChange={handleIconColorChange}
            />
            <div
              className="w-6 h-6 rounded-full border-0"
              style={{ backgroundColor: iconcolor }}
            ></div>
          </div>
          {iconcolor}
        </div>
      </div>
    </>
  );
};

export default ColorChante;
