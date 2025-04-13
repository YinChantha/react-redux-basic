import { animated, config, useSpring } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";
import ButtonPopup from "./Components/ButtonPopup";

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
      <animated.div className="background" style={{ background }} />
      <div className="flex flex-col justify-center items-center h-screen">
        <TypeAnimation
          className="text-4xl font-bold"
          sequence={["Coounter", 3000, "App", 3000]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />
        <h1 className="colorText">Counter App Using Redux</h1>
      </div>
      <ButtonPopup />
    </>
  );
}

export default App;
