import React, { useEffect } from "react";
import { product } from "../components/productInfo.js";
import Image from "next/image";

const ProductCard = () => {
  useEffect(() => {
    fetch("'https://dummyjson.com/products/categories'")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className='grid grid-cols-fluid gap-16 px-6'>
      {product &&
        product.map((item) => (
          <div key={item.id} className=''>
            <Image
              src={item.cover}
              width={600}
              height={600}
              
              className='object-contain'
              alt='/'
            />
            <p className='text-lg font-bold text-center pt-2'>{item.title}</p>
            <p className='text-[#024E82] text-center pt-2'>${item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
