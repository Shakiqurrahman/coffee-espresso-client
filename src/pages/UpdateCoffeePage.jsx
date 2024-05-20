import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import shape from "../assets/images/more/11.png";
import CoffeeForm from "../components/CoffeeForm";

const UpdateCoffeePage = () => {
  const coffee = useLoaderData();
  const { _id } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    form.reset();

    // send data to the server
    fetch(`http://localhost:8000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
        <CoffeeForm
          handleUpdateCoffee={handleUpdateCoffee}
          updated={true}
          coffee={coffee}
        />
      </div>
    </section>
  );
};

export default UpdateCoffeePage;
