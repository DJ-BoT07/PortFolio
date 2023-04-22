import React from "react";

import xpHouse from "../assets/xpHouse.png";
import yttb from "../assets/yttb.png";
import draic from "../assets/draic.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: xpHouse,
      link: "https://spyware007.github.io/Xp-House/",
    },
    {
      id: 2,
      src: yttb,
      link: "https://yttb.netlify.app/",
    },
    {
      id: 3,
      src: draic,
      link: "https://www.draicdypcoe.in/",
    },
  ];

  return (
    <section id="project">
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen my-auto"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-[200px]" 
           data-aos="zoom-in"
           data-aos-duration="500">
            {portfolios.map(({ id, src, link}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a className="font-bold m-3" href={link}>
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
