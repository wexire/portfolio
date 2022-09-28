import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Petro Polishchuk",
      "<PetroPolishchukCV />",
      "PetroCodes.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-32 h-32 mx-auto">
        <Image
          className="rounded-full"
          src="https://i.ibb.co/hKQQwpY/photo-2022-09-01-17-01-02.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-20">
        <h2 className="text-md text-gray-500 uppercase pb-2 tracking-[10px]">
          Junior Full Stack Developer
        </h2>
        <h1 className="text-4xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
