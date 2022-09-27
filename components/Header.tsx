import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20 p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 100, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/petro-polishchuk-89a306223/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/wexire"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/Wexire"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 100, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
