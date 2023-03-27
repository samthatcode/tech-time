import React from "react";
import adam from "../assets/images/adam.png";
import clarette from "../assets/images/clarette.png";
import jeffery from "../assets/images/jeffery.png";
import leonard from "../assets/images/leonard.png";
import jessica from "../assets/images/jessica.png";
import samuel from "../assets/images/samuel.png";
import audience from "../assets/images/audience.png";
import bootstrap from "../assets/images/bootstrap.png";
import liveMarket from "../assets/images/liveMarket.png";
import github from "../assets/images/github.png";
import outroom from "../assets/images/outroom.png";
import uxDesign from "../assets/images/uxDesign.png";
import clock from "../assets/images/clock.png";

const Courses = () => {
  return (
    <>
      <div id="courses" className="bg-[#F8F9FC]   pt-10">
        <div className="container mx-auto px-4 md:px-40 ">
          <div class="text-center mb-8">
            <h2 class="text-4xl font-bold text-[#000F24]">
              Browse our popular courses
            </h2>
            <p class="text-[#845757] mt-2">
              High-definition video is video of higher resolution and quality
              than standard definition. While there’s no standard meaning for
              high definition, generally any standard video image.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-2 md:gap-10 mb-8">
            <div class="btn btn-primary text-[#004DB3] font-bold bg-white py-2 px-4 rounded-lg">
              All Categories
            </div>
            <div class="text-sm text-[#A1A1A1] ">Design</div>
            <div class="text-sm text-[#A1A1A1] ">Development</div>
            <div class="text-sm text-[#A1A1A1] ">Marketing</div>
          </div>

          <div className="pt-10  grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1  ">
            <div class="course-card bg-white rounded-md  shadow-md overflow-hidden">
              <img
                src={uxDesign}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33] rounded-xl p-1 w-[59px]">
                  Design
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm">4.7k (32.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to User Research in UX Design
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px] ">
                      23hrs 50mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">15 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src={leonard}
                      alt=""
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <p class="text-[#000000] font-medium">Leonard Victor</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$15.00</p>
                </div>
              </div>
            </div>

            <div class="course-card bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={audience}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33]  rounded-xl p-1 w-[89px]">
                  Marketing
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm">4.7k (8.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to New Marketing Audience
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px] ">
                      {" "}
                      22hrs 30mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">22 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src={jeffery}
                      alt=""
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <p class="text-[#000000] font-medium">Jeffery Williams</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$32.00</p>
                </div>
              </div>
            </div>

            <div class="course-card bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={bootstrap}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33]  rounded-xl p-1 w-[109px]">
                  Development
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm"> 4.7k (2.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to HTML, CSS and Bootstrap
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px]">
                      45hrs 50mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">55 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src={clarette}
                      alt=""
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <p class="text-[#000000] font-medium"> Clarette Mason</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$55.00</p>
                </div>
              </div>
            </div>

            <div class="course-card bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={github}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33]  rounded-xl p-1 w-[109px]">
                  Development
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm">4.7k (32.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to Javascript, Git, and Github
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px]">
                      30hrs 50mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">22 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src={jessica}
                      alt=""
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <p class="text-[#000000] font-medium"> Jessica Duke</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$32.00</p>
                </div>
              </div>
            </div>

            <div class="course-card bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={outroom}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33]  rounded-xl p-1 w-[89px]">
                  Marketing
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm"> 4.7k (4.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to Outroom Marketing Analysis
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px]">
                      33hrs 50mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">26 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src={samuel}
                      alt=""
                      class="w-8 h-8 rounded-full mr-2"
                    />
                    <p class="text-[#000000] font-medium"> Samuel Jacobs</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$25.00</p>
                </div>
              </div>
            </div>

            <div class="course-card bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={liveMarket}
                alt=""
                class="object-cover w-full h-64 md:h-56"
              />
              <div class="flex items-center justify-between py-2 px-4 ">
                <p class="text-[#1E5DCE] font-bold bg-[#1e5dce33]  rounded-xl p-1 w-[89px]">
                  Marketing
                </p>
                <p class="text-[#a1a1a1] font-bold text-sm"> 4.7k (15.7k+)</p>
              </div>
              <div class="py-4 px-4">
                <h3 class="text-[#000F24] font-bold text-lg leading-tight mb-4">
                  Introduction to Live Marketing Analysis
                </h3>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center text-[#a1a1a1] text-sm">
                    <img src={clock} alt="" class="mr-2" />
                    <span className="text-[#a1a1a1] text-[16px]">
                      10hrs 50mins
                    </span>
                  </div>
                  <p class="text-[#a1a1a1] font-bold text-sm">32 Lessons</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img src={adam} alt="" class="w-8 h-8 rounded-full mr-2" />
                    <p class="text-[#000000] font-medium"> Adam Smith</p>
                  </div>
                  <p class="text-[#004DB3] font-bold">$25.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-center my-4 ">
            <div className="capitalize bg-[#004DB3] mb-7 rounded p-3 text-white hover:text-opacity-70 cursor-pointer text-center">
              explore all courses
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
