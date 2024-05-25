import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import shape from "../assets/images/more/11.png";

const CoffeeDetailsPage = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { name, price, supplier, details, taste, category, photo } =
    coffee || {};
  return (
    <section className="mt-4 relative">
      <img
        className="absolute top-0 bg-cover -z-10 w-full"
        src={shape}
        alt="image of shape"
      />
      <div className="max-width">
        <div>
          <Link
            to="/"
            className="text-lg rancho-font font-[900]  text-[#374151] flex gap-2 items-center bg-transparent hover:bg-[#E3B577] px-3 py-2 w-[170px] rounded-md duration-300"
          >
            <FaArrowLeft />
            Back to home
          </Link>
        </div>
        <div className="mt-4 bg-[#F4F3F0] flex items-center px-4 py-6 sm:px-10 sm:py-8 md:px-40 md:py-16 rounded-md">
          <div className="w-full">
            <img src={photo} alt="Image of Product" />
          </div>
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl rancho-font font-[900]  text-[#374151] mb-2">
              Coffee Details
            </h3>
            <h5 className="mb-1">
              <span className="font-semibold">Name : </span>
              {name}
            </h5>
            <h5 className="mb-1">
              <span className="font-semibold">Price : </span>
              {price}
            </h5>
            <h5 className="mb-1">
              <span className="font-semibold">Supplier : </span>
              {supplier}
            </h5>
            <h5 className="mb-1">
              <span className="font-semibold">Flavour : </span>
              {taste}
            </h5>
            <h5 className="mb-1">
              <span className="font-semibold">Category : </span>
              {category}
            </h5>
            <h5 className="mb-1">
              <span className="font-semibold">Details : </span>
              {details}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeDetailsPage;
