import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMiniStar } from "react-icons/hi2";
import { addToCart } from "./features/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (productDetails) => {
    dispatch(addToCart(productDetails));
  };
  let params = useParams();
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      const data = await response.json();
      setProductDetails(data);
    };
    fetchUserData();
  }, []);
  console.log(productDetails, "productdetails");
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-10 px-5 sm:px-10 py-5 h-auto sm:h-screen">
      <div className="w-full sm:w-1/2">
        <div>
          <img
            src={productDetails.image}
            className="w-full h-auto sm:w-[36rem] sm:h-[38rem] rounded-sm"
            alt="food image"
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        <div className="flex gap-3 items-center mb-2">
          <h1 className="text-2xl font-bold text-zinc-300">
            {productDetails.title}
          </h1>
        </div>

        <div className="flex gap-2 items-center">
          <span className="items-center border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl px-1 text-xs">
            {productDetails.category}
          </span>
          <span className="flex gap-1 items-center text-sm text-zinc-300">
            <HiMiniStar className="flex h-4 w-4 text-yellow-400"></HiMiniStar>
            {productDetails &&
              productDetails.rating &&
              productDetails.rating.rate}
          </span>
        </div>
        <p className="capitalize text-zinc-400 font-semibold">
          {productDetails.description}
        </p>

        <div className="">
          <span className="rounded-sm text-center text-zinc-300 text-2xl font-semibold">
            $ {productDetails.price}
          </span>
        </div>
        <button
          className="w-full sm:w-40 flex justify-center gap-2 border rounded-sm py-3 text-zinc-900 bg-zinc-200 hover:bg-zinc-300  font-semibold"
          type="button"
          onClick={() => {
            handleAddToCart(productDetails);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
