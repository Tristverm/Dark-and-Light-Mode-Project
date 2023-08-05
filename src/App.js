import React, { useRef } from "react";

// component imports
import Hero from "./components/Hero";

const App = () => {
  const appContainer = useRef();

  return (
    <div
      ref={appContainer}
      id="app"
    >
      <Hero appContainer={appContainer} />
    </div>
  );
};

export default App;
