import { useState } from "react";
import TextColorChante from "./textColorChante";

function ButtonPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {setIsPopupOpen(!isPopupOpen);};

  return (
    <div className="absolute right-5 bottom-5">
      <button className="cursor-pointer" onClick={togglePopup}>
        <svg
          className="w-10 h-10 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
      <div
        className={`absolute bottom-14 right-0 bg-white p-3 rounded-lg w-60 h-auto shadow-md transform transition-all duration-300 ${
          isPopupOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-2 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-1 right-1.5 cursor-pointer text-gray-600 hover:text-red-500 text-xl"
          onClick={togglePopup}
        >
          ✕
        </button>
        <TextColorChante />
      </div>
    </div>
  );
}

export default ButtonPopup;