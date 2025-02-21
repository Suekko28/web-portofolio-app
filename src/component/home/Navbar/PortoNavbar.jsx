import React from "react";

function PortoNavbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-blue-light border-gray-200 dark:bg-gray-900 fixed w-full z-1">
      <div className="max-w-screen md:mx-[120px] mx-[32px] h-[92px] flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-semibold text-blue-dark whitespace-nowrap dark:text-white">
            Suekko
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-dark dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse ">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-dark dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Me
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-dark dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("project")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-dark dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-dark dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("findme")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-dark md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-dark dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Find Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PortoNavbar;
