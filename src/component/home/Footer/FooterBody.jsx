import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FooterBody() {
  return (
    <div className="footer space-y-[32px] text-center">
      <h6 className="text-white text-md font-semibold">Find Me</h6>
      <div className="flex flex-nowrap gap-8 items-center justify-center w-full">
        {getContentSocialMedia().map((link) => (
          <a
            href={link.url}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit custome_link"
          >
            <img
              src={link.img_footer}
              alt={`Logo ${link.name}`}
              width="32"
              height="32"
              className="transition ease-in-out hover:scale-120"
            />
          </a>
        ))}
      </div>
      <div className="copyright text-white text-sm font-base">
        &copy; 2025 Suekko. All Rights Reserved.
      </div>
    </div>
  );
}

export default FooterBody;
