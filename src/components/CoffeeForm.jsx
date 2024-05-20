import React from "react";

const CoffeeForm = ({updated,handleAddCoffe,handleUpdateCoffee,coffee,}) => {
  const { name, price, supplier, taste, category, details, photo } = coffee || {};
  return (
    <div className="bg-[#F4F3F0] px-4 md:px-28 py-10 sm:py-[70px] mt-4 rounded-md">
      <h2 className="text-3xl rancho-font font-[900] text-center text-[#374151] mb-4 sm:mb-8">
        {updated ? "Update Coffee" : "Add New Coffee"}
      </h2>
      <p className="text-sm text-center w-4/5 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form
        className="mt-8"
        autoComplete="off"
        onSubmit={updated ? handleUpdateCoffee : handleAddCoffe}
      >
        <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Name</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="name"
              name="name"
              type="text"
              defaultValue={updated ? name : ""}
              placeholder="Enter coffee name"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Price</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="price"
              name="price"
              type="number"
              defaultValue={updated ? price : ""}
              placeholder="Enter coffee price"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Supplier</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="supplier"
              name="supplier"
              type="text"
              defaultValue={updated ? supplier : ""}
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Taste</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="taste"
              name="taste"
              type="text"
              defaultValue={updated ? taste : ""}
              placeholder="Enter coffee taste"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Category</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm "
              id="category"
              name="category"
              type="text"
              defaultValue={updated ? category : ""}
              placeholder="Enter coffee category"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label>Details</label>
            <input
              className="px-4 py-3 rounded-md outline-none text-sm"
              id="details"
              name="details"
              type="text"
              defaultValue={updated ? details : ""}
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 mt-2 sm:mt-4">
          <label>Photo</label>
          <input
            className="px-4 py-3 rounded-md outline-none text-sm"
            id="photo"
            name="photo"
            type="text"
            defaultValue={updated ? photo : ""}
            placeholder="Enter photo URL"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-[#E3B577] rancho-font font-semibold w-full px-4 py-2 rounded-md text-[#331A15] border-[1.5px] border-[#331A15] hover:bg-white hover:text-[#331A15] duration-300 "
        >
          {updated ? "Update Coffee" : "Add Coffee"}
        </button>
      </form>
    </div>
  );
};

export default CoffeeForm;
