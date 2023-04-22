import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full pt-56 lg:pt-0"
    >
      <div className="container lg:pt-10 ">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 mt-[400px] md:my-auto">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
           Here are some fields regarding which I can help you.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*=========vertical line==============*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/*======left card===========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="p-4 rounded shadow cursor-pointer ease-in duration-150 hover:bg-blue-700 hover:scale-105 duration-200 bg-white"
                      >
                        <h3 className="text-blue-300 font-[700]  hover:text-white mb-3 text-2xl hover:font-[600]">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-black hover:font-[500] leading-7 hover:text-white">
                          As a frontend developer, I can design user interfaces,
                          build websites and applications using HTML, CSS, and
                          JavaScript, integrate with APIs and backend services,
                          test and debug frontend code, optimize website or
                          application performance, and collaborate with
                          designers and backend developers for project delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex item-center justify-center animate-shake" data-aos="shake">
                    <figure>
                      <img src=""/>
                    </figure>
                  </div>
                </div>
              </div>

              {/*==============right card========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="p-4 rounded shadow cursor-pointer ease-in duration-150 hover:bg-blue-700 hover:scale-105 duration-200 bg-white"
                      >
                        <h3 className="text-blue-300 font-[700]  hover:text-white mb-3 text-2xl hover:font-[600]">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-black hover:font-[500] leading-7 hover:text-white">
                          As a backend developer, I can help with developing the
                          server-side of a web application or software. This
                          includes designing and maintaining databases, creating
                          APIs, integrating with third-party services,
                          optimizing performance and scalability, and ensuring
                          security and data privacy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex item-center justify-center">
                    <figure>
                      <img src="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*======left card===========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="p-4 rounded shadow cursor-pointer ease-in duration-150 hover:bg-blue-700 hover:scale-105 duration-200 bg-white"
                      >
                        <h3 className="text-blue-300 font-[700]  hover:text-white mb-3 text-2xl hover:font-[600]">
                          AI Enthusiast
                        </h3>
                        <p className="text-[15px] text-black hover:font-[500] leading-7 hover:text-white">
                          As an AI enthusiast, I can help in developing and
                          implementing AI models, improving existing algorithms
                          and developing new ones, analyzing and interpreting
                          data, and identifying new use cases for AI technology.
                          Additionally, I can contribute to the development of
                          ethical and responsible AI practices and standards, as
                          well as educating others about the potential benefits
                          and risks of AI
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex item-center justify-center">
                    <figure>
                      <img src="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/*==============right card========*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1500"
                        className="p-4 rounded shadow cursor-pointer ease-in duration-150 hover:bg-blue-700 hover:scale-105 duration-200 bg-white"
                      >
                        <h3 className="text-blue-300 font-[700]  hover:text-white mb-3 text-2xl hover:font-[600]">
                          Android Rookie
                        </h3>
                        <p className="text-[15px] text-black hover:font-[500] leading-7 hover:text-white">
                          As an Android rookie, I can develop mobile
                          applications, improve user interface, debug and
                          troubleshoot issues, implement new features and stay
                          updated with the latest technologies. I can also
                          collaborate with other developers and participate in
                          code reviews to improve the quality of the codebase.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex item-center justify-center">
                    <figure>
                      <img src="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
