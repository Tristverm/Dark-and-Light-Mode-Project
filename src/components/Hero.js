import React, { useState, useEffect } from "react";

// logo importing
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";

//importing icons

import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

//importing images
import GirlImg from "../assets/img/girl.png";


function Hero() {
  //  updating theme using state
  const [theme, setTheme] = useState("light");

  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark ">
      {/* buttton */}
      <button className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center">
        {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
  );
}

export default Hero;
