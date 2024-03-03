// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function BaseNavbar() {
  // const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="fixed top-0 w-full">
      <ul className="px-8 py-5 flex items-center justify-between text-zinc-900  bg-zinc-950">
        <li>
          <Link to="/" className="flex gap-2 items-center">
            <h1 className="text-2xl text-zinc-300">
              Funnel <b className=" text-zinc-500">Kit</b>
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="px-4 py-2 rounded-sm font-semibold bg-zinc-200 hover:bg-zinc-400"
          >
            Cart
          </Link>
          {/* <span className="text-white text-lg">{cartTotalQuantity}</span> */}
        </li>
      </ul>
    </nav>
  );
}
