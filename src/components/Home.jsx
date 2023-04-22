import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import naruto from "../assets/naruto.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="md:my-auto md:w-1/2 flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 max-w-lg mb-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Projects
            <span className="hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={naruto}
            alt="my profile"
            className="max-w-md"
            data-aos="fade-left"
            data-aos-duration="1200"
          />
        </div>
      </div>
      
      {/* Add the following media query */}
      <style jsx>{`
        @media (max-width: 768px) {
          .max-w-screen-lg {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }
          .md:flex-row {
            flex-direction: column-reverse;
          }
          .md:w-1/2 {
            width: 100%;
          }
          .h-full {
            height: auto;
            min-height: 80vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
