import React, { useState, useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
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
            <h1 className="text-5xl text-primary front-bold mb-6 leading-[60px] dark:text-white">
              Web <br /> <span className="text-accent">Devs</span>{" "}
            </h1>
            <p className="font-light text-grey mb-12 max-w-[597px] dark:text-white">
              We are a team of passionate developers aiming at helpiing your
              business realize and achieve its pottential
            </p>
            {/* checked items */}

            <div className="flex flex-row items-center gap-x-2">
              {/* item */}
              <div>
                {/* item icon */}
                <div className="bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex fex-row justify-center items-center dark:bg-accent/70 dark:text-blue">
                  <BsCheck />
                </div>
                <p className="text-base dark:text-white">
                  Have your work handled by professioanals
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-row font-light">
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
