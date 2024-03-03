import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiMiniShoppingCart, HiRectangleGroup } from "react-icons/hi2";

export default function BaseNavbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="fixed top-0 w-full">
      <ul className="px-8 py-5 flex items-center justify-between text-zinc-900  bg-zinc-950">
        <li>
          <Link to="/" className="flex gap-2 items-center">
            <HiRectangleGroup className="flex h-8 w-8 text-blue-600" />
            <h1 className="text-2xl text-zinc-300">
              Funnel <b className=" text-zinc-500">Kit</b>
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="px-4 py-2 flex items-center gap-2 rounded-sm font-semibold  relative"
          >
            <HiMiniShoppingCart className="flex h-6 w-6 text-zinc-300" />{" "}
            <span className="absolute top-1 right-2 text-white bg-red-600 px-1 text-xs  rounded-full">
              {cartTotalQuantity}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
