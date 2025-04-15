import { animated, config, useSpring } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";
import ButtonPopup from "./components/ButtonPopup";

function App() {
  const [{ background }] = useSpring(
    () => ({
      from: { background: "var(--step0)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <>
      <animated.div className="background" style={{ background, zIndex: -1 }} />
      <div className="flex flex-col justify-center items-center h-screen">
        <TypeAnimation
          className="text-4xl font-bold"
          sequence={["Coounter", 3000, "App", 3000]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />
        <h1 className="colorText">Counter App Using Redux</h1>
        <div className="mt-24 flex gap-3">
          <button className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
            <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <span className="colorText">Increment</span>
          </button>
          <button className="bg-red-500 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2">
            <svg className="w-6 h-6 colorIcon text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <span className="colorText">Decrement</span>
          </button>
        </div>
      </div>
      <ButtonPopup />
    </>
  );
}

export default App;
