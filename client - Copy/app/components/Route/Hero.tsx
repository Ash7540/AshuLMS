import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";

type HeroProps = {};

const Hero: FC<HeroProps> = (props) => {
  return (
    <div className="w-[95%] m-auto flex justify-center items-center h-[70vh] 800px:h-[90vh] translate-y-0 opacity-100 transition-all duration-1000 ease-in-out">
      <div className="w-[90%] 800px:w-[80%] flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-full overflow-hidden">
            <Image
              src={require("../../../public/assests/banner.png")}
              alt=""
              className="object-contain 1100px:max-w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2">
          <h1 className="font-extrabold text-[25px] leading-[35px] sm:text-3xl lg:text-5xl tracking-tight text-center text-black dark:text-white font-Poppins 800px:!leading-[60px]">
            Unleash your Exam
            <span className="text-gradient"> preparation </span>
            <br />
            <span className="text-gradient">with </span>
            VinciExam Pro
          </h1>
          <div className="pt-2"></div>
          <div className="w-full text-center">
            <p className="800px:block hidden font-poppins 800px:text-[22px] 800px:leading-[32px] text-[16px] leading-[23px] font-normal text-[#A3B3BC] mt-5 mb-10">
              Elevate your exam performance with VinciExam Pro, the ultimate
              exam preparation app by VinciTech.
            </p>
            <p className="800px:hidden block font-poppins 800px:text-[22px] 800px:leading-[32px] text-[16px] leading-[25px] font-normal text-[#A3B3BC] mt-5 mb-10">
              Elevate your exam performance with VinciExam Pro, the ultimate
              exam preparation app by VinciTech.
            </p>
            <div className="flex w-full justify-center font-Poppins font-[600]">
              <a href="/courses">
                <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold">
                  Explore Courses
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
