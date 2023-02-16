import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cartItems.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  };

  

  if (totalQuantity < 1) {
    return (
      <div >
        <h1 className="text-center font-bold text-xl">Your bag is currently empty...</h1>
        <Link href='/' className="flex justify-center py-10">
          <button className="bg-black/90 text-white/80 py-3 px-8">Go to Shop</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>Your Cart</h1>
      {cartItems.map((item, index) => (
        <CartItem
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          totalPrice={item.totalPrice}
          quantity={item.quantity}
          key={index}
          
        />
      ))}

      <div className='p-10'>
        <h3 className='text-xl'>Your order</h3>
        <div className='p-4 grid grid-cols-2 gap-4'>
          <p>Cart total</p>
          <p className='text-right'>{totalQuantity}</p>
          <p>Delivery Fee</p>
          <p className='text-right'>Free</p>
          <p>Order total</p>
          <p className='text-right'>${getTotal().totalPrice.toFixed(2)}</p>
          <p className='uppercase text-lg font-extrabold'>Total to pay</p>
          <p className='text-lg font-extrabold text-right'>
            ${getTotal().totalPrice.toFixed(2)}
          </p>
        </div>
        <div className='py-4'>
          <Link href='/checkout'>
            <button className='uppercase text-lg bg-black text-white font font-extrabold py-2 text-center w-[100%] hover:bg-black/80'>
              checkout now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
