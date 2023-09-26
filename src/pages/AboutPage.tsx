import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const AboutPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>App</title>
      </Helmet>
      <motion.section
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mainBg h-full"
      >
        <div className="w-5/6 lg:w-4/6  m-auto  pt-10 overflow-hidden  ">
          <div className="text-3xl lg:text-4xl w-max rounded-md font-medium animate-backInLeft mt-[60px] backdrop-blur-sm p-3 ">
            About us
          </div>
          <p className="text-6xl lg:text-8xl w-max m-auto p-8 rounded-md text-center font-semibold mt-20 bg-[var(--mainColor)] animate-zoomIn">
            Title Company
          </p>
          <div className="text-2xl lg:text-3xl text-left mt-28  rounded-md max-w-[650px] ml-auto animate-backInRight  backdrop-blur-sm p-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore, ratione nisi amet blanditiis et
            accusantium illo beatae suscipit cum quidem corrupti obcaecati exercitationem.
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;
