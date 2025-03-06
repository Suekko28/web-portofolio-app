import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FooterBody() {
  return (
    <div className="footer space-y-[32px] text-center">
      <h6 className="text-white font-semibold">Follow Us</h6>
      <div className="flex flex-wrap gap-16 items-center justify-center w-full">
        {getContentSocialMedia().map((link) => (
          <a
            href={link.url}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-full md:w-auto custome_link"
          >
            <img src={link.img} alt={`Logo ${link.name}`} />
          </a>
        ))}
      </div>
      <div className="copyright text-white font-base">&#169; 2025 Suekko</div>
    </div>
  );
}

export default FooterBody;
