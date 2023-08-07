import React, { useState, useEffect, forwardRef } from "react";

// logo importing
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";

//importing icons

import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

//importing images
import GirlImg from "../assets/img/girl.png";

function Hero() {
  // setting the theme state
  const [theme, setTheme] = useState("light");
  // finding html element reference
  const htmlRef = document.querySelector("#html");

  //theme switch handler
  function themeSwitchHandler() {
    // condition
    if (theme === "light") {
      setTheme("dark");
      htmlRef.classList.add("dark");
      localStorage.clear();
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      htmlRef.classList.remove("dark");
      localStorage.clear();
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      htmlRef.classList.add("dark");
      setTheme("dark");
    } else if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    } else if (localStorage.getItem("theme") === "light") {
      htmlRef.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark ">
      <div className="container mx-auto px-4 lg:px-0 ">
        {/* header */}
        <header className="flex flex-row items-center justify-between">
          {/* logo */}
          <div>
            <a href="#">
              <img
                src={theme === "dark" ? LogoWhite : LogoDark}
                alt="logo"
              />
            </a>
          </div>
          {/* buttton */}
          <button
            className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center"
            onClick={themeSwitchHandler}
          >
            {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </header>
        {/* text and image container */}
        <div>
          {/* text */}
          <div>
            <h1>
              Web <br /> <span>Devs</span>{" "}
            </h1>
            <p>
              We are a team of apssionate developers aiming at helpiing your
              business realize and achieve its pottential
            </p>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-row ">
            <img
              src={GirlImg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
