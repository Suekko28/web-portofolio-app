import React from "react";
import FooterItem from "./FooterItem";

function FooterSection() {
  return (
    <div className="footer-section bg-blue-footer py-6 h-[300px] md:h-fit">
      <div className="mx-[32px] xl:mx-[120px] custome_margin">
        <FooterItem />
      </div>
    </div>
  );
}

export default FooterSection;
