import React from "react";
import { BsCupHot } from "react-icons/bs";
import { HiPencil } from "react-icons/hi2";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import leftShape from "../assets/images/more/left-shape.png";
import rightShape from "../assets/images/more/right-shape.png";
import { Link } from "react-router-dom";


const PopularProducts = () => {
  const Coffeesdata = [
    {
      id: 1,
      img: img1,
      name: "Americano Coffee",
      chef: "Mr. Matin Paul",
      price: 190,
    },
    {
      id: 2,
      img: img2,
      name: "Black Coffee",
      chef: "Mr.Nibra Sweden",
      price: 120,
    },
    {
      id: 3,
      img: img3,
      name: "Espresso Coffee",
      chef: "Mrs. Morisha",
      price: 220,
    },
    {
      id: 4,
      img: img4,
      name: "Cappuccino Coffee",
      chef: "Mr. Moruti",
      price: 270,
    },
  ];
  return (
    <section className="mt-16 sm:mt-[120px]">
      <div className="relative" >
        <img className="absolute top-0 -left-20 hidden md:block opacity-90" src={leftShape} alt="" />
        <img className="absolute top-40 -right-20 hidden md:block opacity-90" src={rightShape} alt="" />
        <div>
          <p className="text-sm text-center mb-2">--- Sip & Savor ---</p>
          <h1 className="text-center text-3xl rancho-font font-bold mb-4">
            Our Popular Products
          </h1>
          <Link to='/add-coffee'>
          <button className="bg-[#E3B577] rancho-font font-semibold block mx-auto px-4 py-2 rounded-md text-white border-[1.5px] border-[#331A15] hover:bg-transparent hover:text-[#331A15] duration-300 ">
            <div className="flex items-center gap-2">
              <span>Add Coffee</span>
              <BsCupHot className="text-xl text-[#331A15]" />
            </div>
          </button>
          </Link>
          <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-10 max-width">
            {Coffeesdata.map((coffee) => (
              <div
                className="bg-[#F5F4F1] p-4 py-6 sm:p-8 rounded-xl flex gap-2 justify-between items-center"
                key={coffee.id}
              >
                <img
                  className="w-1/3 relative z-20"
                  src={coffee.img}
                  alt="images of Coffees"
                />
                <div className="relative z-20">
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Name :</span> {coffee.name}
                  </h3>
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Chef :</span> {coffee.chef}
                  </h3>
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Price :</span>{" "}
                    {coffee.price}
                  </h3>
                </div>
                <div className="flex flex-col space-y-4 relative z-20">
                  <button className="size-10 bg-[#D2B48C] flex justify-center items-center text-xl text-white rounded-md">
                    <IoEye />
                  </button>
                  <button className="size-10 bg-[#3C393B] flex justify-center items-center text-xl text-white rounded-md">
                    <HiPencil />
                  </button>
                  <button className="size-10 bg-[#EA4744] flex justify-center items-center text-xl text-white rounded-md">
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
