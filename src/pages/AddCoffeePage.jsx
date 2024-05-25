import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import shape from "../assets/images/more/11.png";
import CoffeeForm from "../components/CoffeeForm";

const AddCoffeePage = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
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
    fetch("https://coffee-espresso-server75.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Coffee is not addded. Please try again later",
            icon: "error",
            confirmButtonText: "Okay",
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
        <CoffeeForm handleAddCoffee={handleAddCoffee} />
      </div>
    </section>
  );
};

export default AddCoffeePage;
