import React from "react";
import liveclasses from "../assets/images/liveclasses.png";
import audioclasses from "../assets/images/audioclasses.png";
import recordedclasses from "../assets/images/recordedclasses.png";
import notes from "../assets/images/50notes.png";
import unsplashBig from "../assets/images/unsplashBig.png";
import unsplashSmall from "../assets/images/unsplashSmall.png";
import unsplashBoy from "../assets/images/unsplashBoy.png";

import preview95 from "../assets/images/preview95.png";
import preview96 from "../assets/images/preview96.png";
import preview97 from "../assets/images/preview97.png";
import preview98 from "../assets/images/preview98.png";
import preview99 from "../assets/images/preview99.png";

import expmentors from "../assets/images/expmentors.png";
import onemeetings from "../assets/images/onemeetings.png";
import onemeetingsgroup from "../assets/images/onemeetingsgroup.png";
import affordprices from "../assets/images/affordprices.png";

const About = () => {

  
  return (
    <>
      <div id="about" className="bg-[#F8F9FC] h-[828px] md:w-full w-full flex flex-col md:flex-row md:items-center md:justify-center p-4">
        <div className="mt-[-5px] flex flex-col md:flex-row md:items-center md:justify-center lg:mt-[-360px]">
          <div className="order-2 md:order-2 mx-auto w-[90] relative">
            <img
              src={unsplashBig}
              alt="Hero"
              className="w-[90%] lg:w-[100%] h-auto md:max-w-md mx-auto md:mx-0"
            />
            <img
              src={unsplashSmall}
              alt="Hero"
              className="w-[90%] lg:w-[100%] h-auto md:max-w-md mx-auto md:mx-0 absolute lg:right-[250px] right-[40px] top-[165px] "
            />

            <div className=" absolute top-[40px] lg:left-[-50px] lg:right-[250px] left-[-12px] shadow bg-white text-center rounded ">
              <div className="text-black text-[10px] ">
                255k+ Enrolled Students
              </div>
              <div className="flex items-center justify-center mx-auto absolute bg-white p-2 w-full rounded">
                <div className=" preview rounded-full   shadow-md flex items-center justify-center">
                  <img
                    src={preview95}
                    alt="Preview Image"
                    className="sm:h-14 w-16 lg:w-24 rounded-full"
                  />
                </div>
                <div className=" preview rounded-full  shadow-md flex items-center justify-center">
                  <img
                    src={preview96}
                    alt="Preview Image"
                    className="sm:h-14 w-16 lg:w-24 rounded-full"
                  />
                </div>
                <div className=" preview rounded-full   shadow-md flex items-center justify-center">
                  <img
                    src={preview97}
                    alt="Preview Image"
                    className="rounded-full sm:h-14 w-16 lg:w-24"
                  />
                </div>
                <div className=" preview rounded-full   shadow-md flex items-center justify-center">
                  <img
                    src={preview98}
                    alt="Preview Image"
                    className="rounded-full sm:h-14 w-16 lg:w-24"
                  />
                </div>
                <div className=" preview rounded-full   shadow-md flex items-center justify-center">
                  <img
                    src={preview99}
                    alt="Preview Image"
                    className="rounded-full sm:h-14 w-16 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 mx-auto text-center ">
            <div className="text-4xl text-black font-extrabold mt-5 mx-8 mb-4 lg:w-[55%] ">
              High quality video, audio & live classes
            </div>
            <div className="mb-4 text-gray-300 capitalize lg:w-[50%] mx-8 text-justify">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </div>
            <div className=" mb-4 ">
              <button className="bg-bgBlue  p-3 rounded font-medium hover:text-gray-200 mx-auto text-white border">
                View Courses
              </button>
            </div>

            <div className="flex flex-row flex-wrap mx-auto  justify-start items-center">
              <div className=" w-[20%] sm:w-[20%] gap-2 mx-8 mb-4 p-2 flex items-center bg-white rounded[8px]">
                <img
                  src={audioclasses}
                  alt="Audio Classes"
                  className="w-[32px] h-[32px] rounded-[4px] bg-[#3fA96A33]"
                />
                <p className="font-medium  text-center">Audio Classes</p>
              </div>
              <div className=" w-[20%] sm:w-[20%] gap-2 mx-8 mb-4 p-2 flex items-center bg-white rounded[8px]">
                <img
                  src={liveclasses}
                  alt="Live Classes"
                  className="w-[32px] h-[32px] rounded-[4px] bg-[#F79E8E33]"
                />
                <p className="font-medium text-center">Live Classes</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap mx-auto  justify-start items-center">
              <div className="  w-[20%]  gap-2 mx-8 mb-4 p-2 flex items-center bg-white rounded[8px]">
                <img
                  src={recordedclasses}
                  alt="Recorded Classes"
                  className="w-[32px] h-[32px] rounded-[4px] bg-[#9265CD33]"
                />
                <p className="font-medium  text-center">Recorded Classes</p>
              </div>
              <div className="  w-[20%]  gap-2 mx-8 mb-4 p-2 flex items-center bg-white rounded[8px]">
                <img
                  src={notes}
                  alt="50+ Notes"
                  className="w-[32px] h-[32px] rounded-[4px] bg-[#5978CF33]"
                />
                <p className="font-medium  text-center">50+ Notes</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>

      <div className="bg-[#F8F9FC] h-fit w-full gap-8 flex flex-col md:flex-row md:items-center md:justify-center p-4">
        <div className="mt-[125px] flex flex-col md:flex-row md:items-center md:justify-center md:mt-[-250px]">
          <div className="order-1 md:order-1 m-8 ">
            <div className=" text-center">
              <div className="capitalize font-bold text-4xl mb-4">
                this is why we are best from others
              </div>
              <div className="capitalize text-[#A2A2A2] text-justify font-normal mb-4">
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </div>
              <div className="">
                <img src={unsplashBoy} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="order-1 m-8 h-full ">
            <div className="flex gap-4 md:flex-row flex-col ">
              <div className="bg-white rounded-[8px] mb-4 p-4 md:w-[307px] md:h-[202px] w-full ">
                <div className="">
                  <img
                    src={expmentors}
                    alt=""
                    className="bg-[#4C7FBD] rounded-[4px]"
                  />
                </div>
                <p className="capitalize font-bold"> experienced mentors</p>
                <div className="text-[#A2A2A2] text-[12px] capitalize ">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </div>
              </div>
              <div className="bg-white rounded-[8px] mb-8  p-4 md:w-[307px] md:h-[202px] w-full">
                <div className="">
                  <img
                    src={onemeetings}
                    alt=""
                    className="bg-[#AECD5E] rounded-[4px]"
                  />
                </div>
                <p className="capitalize font-bold"> one-on-one meetings</p>
                <div className="text-[#A2A2A2] text-[12px] capitalize">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
              <div className="bg-white rounded-[8px] mb-4  p-4 md:w-[307px] md:h-[202px] w-full">
                <div className="">
                  <img
                    src={onemeetingsgroup}
                    alt=""
                    className="bg-[#ED6BA6] rounded-[4px]"
                  />
                </div>
                <p className="capitalize font-bold"> one-on-one meetings</p>
                <div className="text-[#A2A2A2] text-[12px] capitalize">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </div>
              </div>
              <div className="bg-white rounded-[8px] mb-4  p-4 md:w-[307px] md:h-[202px] w-full ">
                <div className="">
                  <img
                    src={affordprices}
                    alt=""
                    className="bg-[#EA6B45] rounded-[4px]"
                  />
                </div>
                <p className="capitalize font-bold"> affordable prices</p>
                <div className="text-[#A2A2A2] text-[12px] capitalize">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
