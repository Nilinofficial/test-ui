import React from "react";

function FooterLinks() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center space-y-2 ">
      <h2 className="font-bold text-lg">Product</h2>
    <div className="flex flex-col items-start space-y-1 text-sm ">
    <p className="cursor-pointer">Platform</p>
      <p  className="cursor-pointer ">Use Cases</p>
      <p  className="cursor-pointer" >Integrations</p>
    </div>
    </div>
  );
}

export default FooterLinks;
