import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AddCoffeePage = () => {
  return (
    <section className="max-width mt-4">
      <div>
        <Link to='/' className="text-lg rancho-font font-[900]  text-[#374151] flex gap-2 items-center bg-transparent hover:bg-[#E3B577] px-3 py-2 w-[170px] rounded-md duration-300">
          <FaArrowLeft />
          Back to home
        </Link>
      </div>
      <div className="bg-[#F4F3F0] px-28 py-[70px] mt-4 rounded-md">
        <h2 className="text-3xl rancho-font font-[900] text-center text-[#374151] mb-8">
          Add New Coffee
        </h2>
        <p className="text-sm text-center w-4/5 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className="mt-8" autoComplete="off">
          <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="name"
              name="name"
              type="text"
              placeholder="Enter coffee name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Chef</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="chef"
              name="chef"
              type="text"
              placeholder="Enter coffee chef"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Supplier</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="supplier"
              name="supplier"
              type="text"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Taste</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="taste"
              name="taste"
              type="text"
              placeholder="Enter coffee taste"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Category</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="category"
              name="category"
              type="text"
              placeholder="Enter coffee category"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Details</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="details"
              name="details"
              type="text"
              placeholder="Enter coffee details"
            />
          </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Photo</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter photo URL"
            />
          </div>
          <button className="mt-4 bg-[#E3B577] rancho-font font-semibold w-full px-4 py-2 rounded-md text-[#331A15] border-[1.5px] border-[#331A15] hover:bg-transparent hover:text-[#331A15] duration-300 ">Add Coffee</button>
        </form>
      </div>
    </section>
  );
};

export default AddCoffeePage;
