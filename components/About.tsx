import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen mx-auto max-w-6xl px-10 items-center flex justify-evenly relative"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="flex relative flex-col md:flex-row md:text-left justify-evenly items-center text-center"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="relative w-56 h-56 mt-10 flex-shrink-0 md:w-64 md:h-96">
          <Image
            src="https://i.ibb.co/hKQQwpY/photo-2022-09-01-17-01-02.jpg"
            alt="me"
            layout="fill"
            objectFit="cover"
            className="rounded-full md:rounded-lg"
          />
        </div>

        <div className="space-y-10 px-0 md:px-10 mt-5 md:mt-0">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-md">
            I am a highly self-motivated JavaScript software developer. I have
            some theoretical and practical knowledge of algorithms, data
            structure, and programming patterns. I am looking for my first job
            as a software developer. I have a huge desire to get an opportunity
            to improve my skills and learn new ones. Successfully completed
            advanced JavaScript, React.js, Node.js and MongoDB courses, and now
            I&apos;m working on my own pet projects to get more practical
            skills.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
