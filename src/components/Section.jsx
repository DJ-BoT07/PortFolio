import React from "react";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 pt-10 pb-36" id="services">
      <h2 className="text-center text-3xl font-bold mb-10 mt-20 md:mt-40 text-white" data-aos="zoom-in">
        Services
      </h2>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mx-4 md:mx-10 lg:mx-28">
          <div
            className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-gray-700 col-span-1 row-span-2 flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-4xl font-bold text-gray-100 mr-2">2+</h3>
            <p className="text-lg font-medium text-gray-100">Years Experience</p>
          </div>
          <div
            className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-gray-700 flex justify-center items-center"
            data-aos="fade-down"
          >
            <AiFillIeCircle className="text-4xl text-gray-100 mr-4" />
            <span className="text-lg font-medium text-gray-100">Web Development</span>
          </div>
          <div
            className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-gray-700 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <AiFillAndroid className="text-4xl text-gray-100 mr-4" />
            <span className="text-lg font-medium text-gray-100">App Development</span>
          </div>
          <div
            className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-gray-700 col-span-2 flex justify-center items-center"
            data-aos="fade-up"
          >
            <AiFillWindows className="text-4xl text-gray-100 mr-4" />
            <span className="text-lg font-medium text-gray-100">Machine Learning</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
