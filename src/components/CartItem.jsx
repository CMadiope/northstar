import Image from "next/image";
import React from "react";
import {TiDelete} from 'react-icons/ti'
import { removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, price, title, quantity, totalPrice, image }) => {

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-4 ">
      <div className='flex  border-b-2'>
        <div className='md:w-1/2 p-8'>
          <Image
            src={image}
            alt={title}
            width={90}
            height={100}
            className=' object-contain w-[190px] h-[160px]'
          />
        </div>
        <div className='md:w-1/2 p-8 relative'>
          <h3 className='font-extrabold text-lg md:text-xl'>{title}</h3>
          <p className='font-bold text-gray-400 py-4'>
            Quantity: <span>{quantity}</span>
          </p>
          <p className='text-gray-400 py-2'>
            Delivery Free | Free Exchange or return within 30 days
          </p>
          <p className='text-right font-extrabold text-black/70 text-lg'>
            ${totalPrice}
          </p>
          <div className="group">
            <div className='absolute top-2 right-6 cursor-pointer ' onClick={() =>{
              dispatch(removeFromCart(id))
            }}>
              <TiDelete size={25} />
            </div>
            <p className='bg-black/30 text-white/70 rounded-md p-2 absolute -top-8 right-2 hidden group-hover:flex'>
              Remove from cart
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default CartItem;
