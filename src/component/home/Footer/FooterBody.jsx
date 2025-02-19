import React from "react";

function FooterBody() {
  const linkSosmed = ["LinkedIn", "Github", "Instagram"];
  const linkNavbar = ["About Me", "Experiences", "Project", "Contact", "Gallery"]

  return (
    <div className="footer space-y-[64px]">
      <div className="flex flex-wrap gap-16 items-center">
        {linkSosmed.map((link, index) => (
          <h1 className="text-white md:w-auto custome_link" key={index}>{link}</h1>
        ))}
      </div>
      <div className="flex flex-wrap gap-16 items-center">
        {linkNavbar.map((link, index) => (
          <h1 className="text-white md:w-auto custome_link" key={index}>{link}</h1>
        ))}
      </div>
      <div className="copyright text-white">
      &#169; 2025 Suekko
      </div>
    </div>
  );
}

export default FooterBody;
