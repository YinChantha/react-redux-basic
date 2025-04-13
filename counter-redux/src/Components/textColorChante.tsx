import { ChangeEvent } from "react";
import { useColor } from "../ColorProvider";

const TextColorChante = () => {
  const { color, setColor } = useColor();

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <>
      <div className="flex flex-col mt-3">
        <p className="font-bold colorText">Text Color</p>
        <div className="border-1 border-gray-300 rounded-xl p-2 w-full flex justify-between">
          <div className="relative">
            <input
              type="color"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              value={color}
              onChange={handleColorChange}
            />
            <div
              className="w-6 h-6 rounded-full border-0"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          {color}
        </div>
      </div>
    </>
  );
};

export default TextColorChante;
