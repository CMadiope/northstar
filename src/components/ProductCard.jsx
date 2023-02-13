import React from "react";
import { product } from "../components/productInfo.js";
import Image from "next/image";
import Link from "next/link.js";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data.status === 404) {
      setProducts([]);
      return;
    } else {
      setProducts(data);
    }
  };

  useEffect (() => {
    try {
      fetchData()
    } catch (error) {
      console.log(err);
    }
  },[])

  return (
    <div className='grid grid-cols-fluid gap-16 px-6 py-12'>
      {products?.map((item, index) => (
        <Link href={`/products/[id]`} as={`/products/${item.id}`} key={index} className=''>
          <div className='pb-4 shadow-lg rounded-lg'>
            <div className='flex justify-center'>
              <Image
                src={item.image}
                width={90}
                height={100}
                className='object-contain w-[180px] h-[150px]'
                alt='/'
              />
            </div>
            <p className='text-base font-bold text-center py-2'>{item.title}</p>
            <p className='text-[#024E82] text-center pt-2'>${item.price}</p>
            <div className='flex justify-center'>
              <button className='py-2 px-6 bg-green-400 text-white rounded-lg my-4 hover:scale-110'>
                Add to cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

//  const [products, setProducts] = useState([]);


export default ProductCard;
