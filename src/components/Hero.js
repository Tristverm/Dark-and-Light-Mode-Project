import React, { useState, useEffect, forwardRef } from "react";

// logo importing
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";

//importing icons

import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

//importing images
import GirlImg from "../assets/img/girl.png";

function Hero({ appContainer }) {
  //  updating theme using state
  const [theme, setTheme] = useState("light");
  localStorage.setItem("theme", `${theme.toString()}`);

  // themeSwitchHandler

  function themeSwitchHandler() {
    if (theme === "light") {
      appContainer.current.classList.add("dark");
      setTheme("dark");
      // localStorage.removeItem("theme");
      // localStorage.setItem("theme", "dark");
    } else {
      appContainer.current.classList.remove("dark");
      setTheme("light");
      // localStorage.removeItem("theme");
      // localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      appContainer.current.classList.add("dark");
    } else if (localStorage.getItem("theme") === "light") {
      appContainer.current.classList.remove("dark");
    }
  }, [appContainer]);

  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark ">
      {/* buttton */}
      <button
        className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center"
        onClick={themeSwitchHandler}
      >
        {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
  );
}

export default Hero;
