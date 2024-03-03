import { useSelector, useDispatch } from "react-redux";
import {
  HiMiniPlusSmall,
  HiMiniMinusSmall,
  HiMiniXMark,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";
import cartImg from "./assets/cartImg.png";
import {
  removeFromCart,
  decreaseCart,
  increaseQuantity,
  clearCart,
  getTotal,
} from "./features/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handelRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handelDecreaseQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handelIncreaseQuantity = (cartItem) => {
    dispatch(increaseQuantity(cartItem));
  };
  const handelClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-screen text-zinc-300 sm:flex sm:flex-col sm:justify-center sm:items-center">
      {cart && cart.cartItems.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl">Your cart Item is empty</h1>

          <img src={cartImg} alt="" />
          <Link
            to="/"
            className="px-5 mt-8 py-2 flex items-center gap-2 text-2xl border border-zinc-500 bg-zinc-700 hover:bg-zinc-800"
          >
            <HiOutlineArrowLongLeft className="flex h-8 w-8" />
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <h1 className="py-8 text-2xl px-3">Shopping Cart</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-3/4 flex flex-col gap-5 border-r border-zinc-500 px-4 ">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
                {cart.cartItems.map((cartItem, index) => {
                  return (
                    <div
                      key={"cartItem" + index}
                      className="px-3 py-2 border bg-zinc-900  border-zinc-600 relative"
                    >
                      <div className="flex gap-6">
                        <div>
                          <Link to={`/products/${cartItem.id}`}>
                            <img
                              src={cartItem.image}
                              className="w-40 h-40 object-cover shrink-0 "
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                          <h1 className="flex gap-2">
                            <span className="w-12 text-zinc-400">title:</span>
                            <span className="text-zinc-300">
                              {cartItem.title}
                            </span>
                          </h1>
                          <h1 className="flex gap-2">
                            <span className="w-12 text-zinc-400">price:</span>
                            <span className="text-zinc-300">
                              ${cartItem.price}
                            </span>
                          </h1>
                          <h1 className="flex gap-2">
                            <span className="w-12 text-zinc-400">Qty:</span>
                            <span className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => handelDecreaseQuantity(cartItem)}
                                className="px-2 border"
                              >
                                <HiMiniMinusSmall className="flex h-5 w-5"></HiMiniMinusSmall>
                              </button>
                              <span className="text-zinc-300">
                                {cartItem.cartQuantity}
                              </span>
                              <button
                                onClick={() => handelIncreaseQuantity(cartItem)}
                                className="px-2 border"
                              >
                                <HiMiniPlusSmall className="flex h-5 w-5"></HiMiniPlusSmall>
                              </button>
                            </span>
                          </h1>
                          <h1 className="flex gap-2">
                            <span className="w-12 text-zinc-400">total:</span>
                            <span className="text-zinc-300">
                              ${cartItem.price * cartItem.cartQuantity}
                            </span>
                          </h1>
                        </div>
                      </div>
                      {/* <button
                        type="button"
                        onClick={() => handelRemoveFromCart(cartItem)}
                        className="absolute right-3 bottom-3 px-3 py-2 text-sm text-center text-zinc-900 bg-zinc-300 rounded-sm hover:bg-zinc-400  "
                      >
                        Remove
                      </button> */}
                      <button
                        type="button"
                        onClick={() => handelRemoveFromCart(cartItem)}
                        className="absolute right-2 bottom-0 px-3 py-2 text-sm text-center"
                      >
                        <HiMiniXMark className="flex h-5 w-5 text-zinc-300" />
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => handelClearCart()}
                className=" px-4 py-2 text-sm text-center w-full sm:w-28 text-zinc-900 bg-zinc-300 rounded-sm hover:bg-zinc-400"
              >
                Clear cart
              </button>
            </div>
            <div className="w-full sm:w-3/12 py-5 flex flex-col gap-3 px-10">
              <h1 className="text-xl py-3">Cart totals</h1>
              <div className="flex justify-between items-center border-t border-b text-sm py-4 text-zinc-300">
                <h2>Total</h2>
                <span>${cart.cartTotalAmount}</span>
              </div>
              <h1 className="text-zinc-300">
                Taxes and shipping calculated at checkout
              </h1>
              <button
                type="button"
                className=" px-4 py-2 text-sm text-center text-zinc-900 bg-zinc-300 rounded-sm hover:bg-zinc-400"
              >
                Place Order{" "}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
//
{
  /* <button
type="button"
onClick={() => handelRemoveFromCart(cartItem)}
className="absolute right-3 bottom-3 px-3 py-2 text-sm text-center  "
>
<HiMiniXMark className="flex h-5 w-5 text-zinc-300" />
</button> */
}
