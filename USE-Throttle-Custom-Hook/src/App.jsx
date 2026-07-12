import { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./hooks/use-throttle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    //suppose any expensive operation or api call
  };

  const throttledHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return (
    <>
      windowSize: {windowSize.width}x{windowSize.height}
    </>
  );
}

export default App;
