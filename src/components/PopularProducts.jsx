import axios from "axios";
import { useEffect, useState } from "react";
import { BsCupHot } from "react-icons/bs";
import { HiPencil } from "react-icons/hi2";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import leftShape from "../assets/images/more/left-shape.png";
import rightShape from "../assets/images/more/right-shape.png";

const PopularProducts = () => {
  const [coffeedata, setCoffeedata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://coffee-espresso-server75.vercel.app/coffee");
        setCoffeedata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteCoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-espresso-server75.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Coffee Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              const filteredData = coffeedata.filter(
                (data) => data._id !== _id
              );
              setCoffeedata(filteredData);
            }
          });
      }
    });
  };

  return (
    <section className="mt-16 sm:mt-[120px]">
      <div className="relative">
        <img
          className="absolute top-0 -left-20 hidden md:block opacity-90"
          src={leftShape}
          alt=""
        />
        <img
          className="absolute top-40 -right-20 hidden md:block opacity-90"
          src={rightShape}
          alt=""
        />
        <div>
          <p className="text-sm text-center mb-2">--- Sip & Savor ---</p>
          <h1 className="text-center text-3xl rancho-font font-bold mb-4">
            Our Popular Products
          </h1>
          <Link to="/add-coffee">
            <button className="bg-[#E3B577] rancho-font font-semibold block mx-auto px-4 py-2 rounded-md text-white border-[1.5px] border-[#331A15] hover:bg-transparent hover:text-[#331A15] duration-300 ">
              <div className="flex items-center gap-2">
                <span>Add Coffee</span>
                <BsCupHot className="text-xl text-[#331A15]" />
              </div>
            </button>
          </Link>
          <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-10 max-width">
            {coffeedata.map((coffee, index) => (
              <div
                className="bg-[#F5F4F1] p-4 py-6 sm:p-8 rounded-xl flex gap-2 justify-between items-center"
                key={index}
              >
                <img
                  className="w-[40%] relative z-20"
                  src={coffee.photo}
                  alt="images of Coffees"
                />
                <div className="relative z-20">
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Name :</span> {coffee.name}
                  </h3>
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Flavour :</span>{" "}
                    {coffee.taste}
                  </h3>
                  <h3 className="mb-2 text-lg">
                    <span className="font-semibold">Price :</span>{" "}
                    {coffee.price} Tk.
                  </h3>
                </div>
                <div className="flex flex-col space-y-4 relative z-20">
                 <Link to={`coffee/${coffee._id}`}>
                 <button className="size-10 bg-[#D2B48C] flex justify-center items-center text-xl text-white rounded-md hover:opacity-85 duration-200">
                    <IoEye />
                  </button>
                 </Link>
                  <Link to={`update-coffee/${coffee._id}`}>
                    <button className="size-10 bg-[#3C393B] flex justify-center items-center text-xl text-white rounded-md hover:opacity-85 duration-200">
                      <HiPencil />
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteCoffee(coffee._id)}
                    className="size-10 bg-[#EA4744] flex justify-center items-center text-xl text-white rounded-md hover:opacity-85 duration-200"
                  >
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
