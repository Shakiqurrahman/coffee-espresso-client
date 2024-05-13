import React from "react";
import { BsCupHot } from "react-icons/bs";

const PopularProducts = () => {
  return (
    <section className="mt-[120px]">
      <p className="text-sm text-center mb-2">--- Sip & Savor ---</p>
      <h1 className="text-center text-3xl rancho-font font-bold mb-4">
        Our Popular Products
      </h1>
      <button className="bg-[#E3B577] rancho-font font-semibold block mx-auto px-4 py-2 rounded-md text-white border-[1.5px] border-[#331A15]">
        <div className="flex items-center gap-2">
          <span>Add Coffee</span>
          <BsCupHot className="text-xl text-[#331A15]"/>
        </div>
      </button>
      <div className="mt-12">
      {

      }
      </div>
    </section>
  );
};

export default PopularProducts;
