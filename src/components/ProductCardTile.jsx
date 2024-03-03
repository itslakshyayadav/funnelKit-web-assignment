import { HiMiniStar } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

export default function ProductCardTile(props) {
  const { product } = props;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="mt-6 border border-zinc-700 rounded-2xl  bg-zinc-900 hover:bg-zinc-800">
      <Link to={`/products/${product.id}`}>
        <img
          className="rounded-t-2xl object-cover object-center w-full h-56"
          src={product.image}
          alt=""
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col grow gap-2 ">
            <div className="">
              <h2 className=" text-lg capitalize font-semibold tracking-tight text-zinc-300">
                {product.title}
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <span className="items-center border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl px-1 text-xs">
                {product.category}
              </span>
              <span className="flex gap-1 items-center text-zinc-300 text-sm">
                <HiMiniStar className="flex h-4 w-4 text-yellow-400"></HiMiniStar>
                {product.rating.rate}
              </span>
            </div>
          </div>
          {/* <div>
          <BaseButton
            userAuthneed={true}
            onClick={() => {
              addFavouriteDish(product._id);
            }}
            type="submit"
          >
            <div className="flex gap-2 items-center">
              {isFavorite ? (
                <BaseIcon
                  className="text-red-500"
                  iconName={ICONS.SolidHeart}
                ></BaseIcon>
              ) : (
                <BaseIcon iconName="heart"></BaseIcon>
              )}
            </div>
          </BaseButton>
        </div> */}
        </div>

        <div className="flex justify-between items-center">
          <p className="my-2 font-bold text-zinc-300 text-lg">
            ${product.price}
          </p>

          <div className="flex justify-between items-center">
            <button
              className="inline-flex items-center px-4 py-2 text-sm text-center text-zinc-900 bg-zinc-300 rounded-sm hover:bg-zinc-400"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
