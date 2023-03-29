import React from "react";
import { MdArrowOutward } from "react-icons/md";
import hero2 from "../assets/images/hero2.png";
import preview95 from "../assets/images/preview95.png";
import preview96 from "../assets/images/preview96.png";
import preview97 from "../assets/images/preview97.png";
import preview98 from "../assets/images/preview98.png";
import preview99 from "../assets/images/preview99.png";
import zoom from "../assets/images/zoom.png";
import stripe from "../assets/images/stripe.png";
import monday from "../assets/images/monday.png";
import slack from "../assets/images/slack.png";
import dropbox from "../assets/images/dropbox.png";
import arrowVector from "../assets/images/arrowVector.png";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="bg-bgBlue flex flex-col md:w-[100%] w-full md:flex-row md:items-center md:justify-center p-4 md:h-[925px] sm:h-auto "
      >
        <div className="order-2 md:order-2 mx-auto w-[90%] relative">
          <img
            src={hero2}
            alt="Hero"
            className="w-full h-auto md:max-w-md mx-auto md:mx-0"
          />
          <img
            src={arrowVector}
            alt="Hero"
            className="absolute md:w-[111.08px] md:h-[222.87px] md:left-[-13.23%] md:top-[48.42%] md:bottom-[7.49%] text-white
             w-[54px] h-[109px] left-[87.41%] right-[10.88%] top-[-6.15%] bottom-[56.15%] arrow"
          />
        </div>
        <div className="order-1 mx-auto mt-20 w-full ">
          <div className="w-[90%] mx-auto block text-center">
            <div className="text-4xl text-white font-bold mb-4">
              Grow your skills to advance your career path
            </div>
            <div className="mb-4 text-white w-[90%] ">
              Build your future with our quality education. The Best and Largest
              All-In-One Tutoring Platform In the World
            </div>
          </div>
          <div className="flex flex-row gap-4 mb-4 mx-auto w-[90%]">
            <button className="bg-transparent flex text-white border hover:text-[#ccc] items-center justify-center m-2 lg:w-[25%] sm:w-full md:w-full p-2">
              Get Started Now <MdArrowOutward className="mt-1 ml-1" />
            </button>
            <button className="font-medium bg-[#fff] hover:bg-indigo-200 hover:text-white text-bgBlue p-3 m-2 rounded-[4px] ">
              Enroll Now
            </button>
          </div>
          <div className="flex items-center justify-start  w-[90%] mx-auto">
            <div className=" preview rounded-full  bg-white shadow-md flex items-center justify-center">
              <img
                src={preview95}
                alt="Preview Image"
                className="sm:h-24 w-16 lg:w-24 rounded-full"
              />
            </div>
            <div className=" preview rounded-full  bg-white shadow-md flex items-center justify-center">
              <img
                src={preview96}
                alt="Preview Image"
                className="sm:h-24 w-16 lg:w-24 rounded-full"
              />
            </div>
            <div className=" preview rounded-full  bg-white shadow-md flex items-center justify-center">
              <img
                src={preview97}
                alt="Preview Image"
                className="rounded-full sm:h-24 w-16 lg:w-24"
              />
            </div>
            <div className=" preview rounded-full  bg-white shadow-md flex items-center justify-center">
              <img
                src={preview98}
                alt="Preview Image"
                className="rounded-full sm:h-24 w-16 lg:w-24"
              />
            </div>
            <div className=" preview rounded-full  bg-white shadow-md flex items-center justify-center">
              <img
                src={preview99}
                alt="Preview Image"
                className="rounded-full sm:h-24 w-16 lg:w-24"
              />
            </div>
            <div className="ml-2">
              <div className="text-white text-2xl font-bold">255k+</div>
              <div className="text-white ">Previews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-greyLike h-[88px]  flex items-center mx-auto flex-row justify-evenly ">
        <div className=" flex  gap-8  sm:justify-evenly m-5 ">
          <div className="">
            <img
              src={zoom}
              alt="Zoom"
              className="shadow-md w-[130px] h-[29px]"
            />
          </div>
          <div className="">
            <img
              src={stripe}
              alt="Stripe"
              className="shadow-md w-[130px] h-[29px]"
            />
          </div>
          <div className="">
            <img
              src={monday}
              alt="Monday"
              className="shadow-md w-[130px] h-[29px]"
            />
          </div>
          <div className="">
            <img
              src={slack}
              alt="Slack"
              className="shadow-md w-[130px] h-[29px]"
            />
          </div>
          <div className="">
            <img
              src={dropbox}
              alt="Dropbox"
              className="shadow-md w-[130px] h-[29px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
