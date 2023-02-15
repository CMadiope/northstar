import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  if (totalQuantity < 1) {
    return (
      <div>
        <h1>Your bag is currently empty</h1>
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
          <p className='text-right'>100</p>
          <p>Delivery Fee</p>
          <p className='text-right'>Free</p>
          <p>Order total</p>
          <p className='text-right'>$100</p>
          <p className='uppercase text-lg font-extrabold'>Total to pay</p>
          <p className='text-lg font-extrabold text-right'>$100</p>
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
