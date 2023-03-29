import React from "react";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import person4 from "../assets/images/person4.png";
import person5 from "../assets/images/person5.png";
import person6 from "../assets/images/person6.png";
import person7 from "../assets/images/person7.png";
import person8 from "../assets/images/person8.png";
import person9 from "../assets/images/person9.png";
import person10 from "../assets/images/person10.png";

const Community = () => {
  return (
    <div id="community" class="bg-[#004DB3] py-10 ">
      <div class="container mx-auto px-4 md:px-40">
        <div class="text-center">
          <p class="uppercase font-[500] text-white">join our community</p>
          <div class="capitalize text-[#ffffff] font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            are you ready to connect with the future talent of the tech world
          </div>
          <div class="capitalize text-[16px] text-[#ffffff]">
            meet up with other techstars and grow together
          </div>
        </div>
        <div class="mt-7 md:w-[983px] w-[291.73px] h-[207.12px] md:h-[519.74px] border border-indigo-500 relative mx-auto">
          <div class="rounded-full">
            <img
              src={person1}
              alt=""
              class="absolute w-[25.5px] h-[25.5px] top-[30.16px] left-[37.06px] md:top-[75px] md:left-[93px]"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person2}
              alt=""
              class="absolute w-[20.07px] h-[17.94px] left-[158.15px] top-[36.09px] md:left-[396.86px] md:top-[90.56px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person3}
              alt=""
              class="absolute w-[25.5px] h-[25.5px] left-[333.55pxpx] top-[7.97px] md:left-[837px] md:top-[20px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person4}
              alt=""
              class="absolute w-[27.07px] h-[27.07px] left-[104.02px] top-[75.02px] md:left-[261.01px] md:top-[188.25px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person5}
              alt=""
              class="absolute w-[25.5px] h-[25.5px] left-[221.17px] top-[51.81px] md:left-[555px] md:top-[130px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person6}
              alt=""
              class="absolute w-[27.37px] h-[27.37px] left-[255.28px] top-[2.82px] md:left-[715.88px] md:top-[132.54px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person7}
              alt=""
              class="absolute w-[25.5px] h-[25.5px] left-[ 346.3px] top-[93.12px] md:left-[869px] md:top-[233.68px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person8}
              alt=""
              class="absolute w-[25.5px] h-[25.5px] left-[103.21px] top-[153.42px] md:left-[259px] md:top-[385px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person9}
              alt=""
              class="absolute  w-[25.5px] h-[25.5px] left-[195.67px] top-[127.79px] md:left-[491px] md:top-[320.68px] rounded-full"
            />
          </div>
          <div class="rounded-full">
            <img
              src={person10}
              alt=""
              class="absolute w-[26.46px] h-[26.46px] left-[38.43px] top-[140.41px] md:left-[799.07px] md:top-[352.34px] rounded-full"
            />
          </div>
        </div>
        <div className="md:flex items-center justify-center">
          <div class="capitalize w-full md:w-1/2 text-[#004DB3] text-center bg-white font-bold mt-7 text-sm md:text-base rounded p-3">
            join our community
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
