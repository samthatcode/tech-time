import { useState } from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-bgBlue  text-white top-0 fixed md:w-full w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  justify-between h-[100px] ">
            <div className="flex  items-center text-gray-200 ">
              <a
                href="#home"
                onclick={() => scrollToSection("home")}
                className="text-white hover:text-gray-300 font-bold brand-name md:mr-[35rem]"
              >
                TechTime
              </a>
              <div className="hidden md:block flex-grow  ">
                <div className="flex  items-baseline justify-end space-x-4">
                  <a
                    href="#home"
                    active
                    smooth="true"
                    onclick={() => scrollToSection("home")}
                    className="hover:text-white font-bold"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    smooth="true"
                    onclick={() => scrollToSection("about")}
                    className="hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#courses"
                    smooth="true"
                    onclick={() => scrollToSection("courses")}
                    className="hover:text-white"
                  >
                    Courses
                  </a>
                  <a
                    href="#testimonials"
                    smooth="true"
                    onclick={() => scrollToSection("testimonials")}
                    className="hover:text-white"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#community"
                    smooth="true"
                    onclick={() => scrollToSection("community")}
                    className="hover:text-white"
                  >
                    Community
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-500 focus:outline-none  focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-block font-medium bg-[#fff] hover:bg-indigo-200 hover:text-white text-bgBlue py-2 px-4 rounded-[4px]"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              smooth="true"
              onclick={() => scrollToSection("home")}
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-400"
            >
              Home
            </a>
            <a
              href="#about"
              smooth="true"
              onclick={() => scrollToSection("about")}
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-400"
            >
              About
            </a>
            <a
              href="#courses"
              smooth="true"
              onclick={() => scrollToSection("courses")}
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-400"
            >
              Courses
            </a>
            <a
              href="#testimonials"
              smooth="true"
              onclick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-400"
            >
              Testimonials
            </a>
            <a
              href="#community"
              smooth="true"
              onclick={() => scrollToSection("community")}
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-400"
            >
              Community
            </a>
          </div>
          <div className="px-4 py-3 sm:px-6">
            <a
              href="#"
              className="block font-medium text-center bg-[#FFFFFF] hover:bg-indigo-100 text-bgBlue py-2 px-4 rounded-[4px]"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
