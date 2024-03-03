// import { useState, useEffect } from "react";
import ProductCardTile from "./components/ProductCardTile";
import { useGetAllProductsQuery } from "./features/productsApi";

export default function Home() {
  const { data } = useGetAllProductsQuery();

  console.log(data);
  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-3">
        {data &&
          data.map((product, index) => {
            return (
              <div key={"product" + index}>
                <ProductCardTile product={product}></ProductCardTile>
              </div>
            );
          })}
      </div>
    </div>
  );
}
