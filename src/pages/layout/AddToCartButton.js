// AddToCartButton.js
'use client'
import React from 'react';
import { toast } from 'react-toastify';

export default function AddToCartButton({ product, discountAmount }) {
  function CustomToast({ itemName, discountAmount }) {
    return (
      <div>
        <p className="text-black text-xs">Added to cart: {itemName}</p>
        <p className="text-primary text-base">You Saved: {discountAmount}</p>
      </div>
    );
  }

  function addToCart(event, itemName, discountAmount) {
    event.preventDefault();
    toast(<CustomToast itemName={itemName} discountAmount={discountAmount} />, {
      position: "top-right",
      autoClose: 2000, // 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  return (
    <a
      href={product.href}
      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
      onClick={(event) => addToCart(event, product.name, discountAmount)}
    >
      Add to bag<span className="sr-only">, {product.name}</span>
    </a>
  );
}