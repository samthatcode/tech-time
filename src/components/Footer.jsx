import React from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import discord from "../assets/images/discord.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="footer" className="bg-[#000F24] px-6 py-7 md:px-20">
      <div className="flex flex-col justify-between text-white md:flex-row">
        <div className="mx-1 mb-6 flex justify-start md:mb-0 md:justify-center">
          <div className="font-light">
            <div className="mb-4 flex w-full justify-start text-left text-2xl font-medium">
              <div>TechTime</div>
            </div>
            <div className="max-w-[32ch] text-justify md:text-left capitalize text-sm">
              reach out to us on any social media network
            </div>
            <div className="flex">
              <a href="" className="hover:font-medium ">
                <div className="">
                  <img
                    src={facebook}
                    className="mr-5 h-5 w-5 bg-[#000000] rounded-full "
                  />
                </div>
              </a>
              <a href="" className="hover:font-medium ">
                <div className="">
                  <img
                    src={twitter}
                    className="mr-5 h-5 w-5 bg-[#000000] rounded-full "
                  />
                </div>
              </a>
              <a href="" className="hover:font-medium ">
                <div className="">
                  <img
                    src={youtube}
                    className="mr-5 h-5 w-5 bg-[#000000] rounded-full "
                  />
                </div>
              </a>
              <a href="" className="hover:font-medium ">
                <div className="">
                  <img
                    src={instagram}
                    className="mr-5 h-5 w-5 bg-[#000000] rounded-full "
                  />
                </div>
              </a>
              <a href="" className="hover:font-medium ">
                <div className="">
                  <img
                    src={discord}
                    className="mr-5 h-5 w-5 bg-[#000000] rounded-full "
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-1 mb-2 flex justify-start md:mb-0 md:justify-center">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Useful links</div>
            <div className="flex flex-col text-left transition duration-200">
              <a
                href="#home"
                smooth="true"
                onclick={() => scrollToSection("home")}
                className="mb-4 hover:font-medium "
              >
                Home
              </a>
              <a
                href="#about"
                smooth="true"
                onclick={() => scrollToSection("about")}
                className="mb-4 hover:font-medium "
              >
                About Us
              </a>
              <a
                href="#courses"
                smooth="true"
                onclick={() => scrollToSection("courses")}
                className="mb-4 hover:font-medium "
              >
                Our Courses
              </a>
              <a
                href="#testimonials"
                smooth="true"
                onclick={() => scrollToSection("testimonials")}
                className="mb-4 hover:font-medium "
              >
                Testimonials
              </a>
              <a
                href="#community"
                smooth="true"
                onclick={() => scrollToSection("community")}
                className="mb-4 hover:font-medium "
              >
                Our Community
              </a>
            </div>
          </div>
        </div>
        <div className="mx-1 mb-2 flex justify-start md:mb-0 md:justify-center">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Community</div>
            <div className="flex flex-col text-left transition duration-200">
              <a href="" className="mb-4 hover:font-medium " smooth>
                Help centers
              </a>
              <a href="" className="mb-4 hover:font-medium " smooth>
                Partners
              </a>
              <a href="" className="mb-4 hover:font-medium " smooth>
                Suggestion
              </a>
              <a href="" className="mb-4 hover:font-medium " smooth>
                Blogs
              </a>
              <a href="" className="mb-4 hover:font-medium " smooth>
                Newsletter
              </a>
            </div>
          </div>
        </div>
        <div className="mx-1 flex flex-row  md:justify-center">
          <div className="">
            <div className="mb-4 text-2xl font-medium">Subscribe Us</div>
            <div className="flex flex-row justify-center md:flex-row md:justify-between">
              <input
                className="rounded-l-md border-[#054FB3] bg-[#2A2A2B] py-2 px-3 "
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@gmail.com"
              />
              <div className="text-center text-sm bg-[#054FB3] justify-center  px-3 py-2 rounded-r-md ">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
