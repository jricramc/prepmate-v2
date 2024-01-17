// src/pages/layout/menu-layout.js
import React from 'react'
import ItemAccordion from './descriptionAccord'
import AddToCartButton from './AddToCartButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MenuItems({ Store, products }) {
    return (
      <div className="bg-white">
        <ToastContainer />
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className='flex justify-between items-center'>
            <a className='inline-block ' style={{width: 'fit-content'}}href='/Restaurants'>
              <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </a>
            <h3>{Store}</h3>
            <div></div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imgSrc}
                      alt={product.imgAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <h3 className="text-sm sm:text-md font-bold text-gray-900 text-left">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-900">${product.price}</p>
                  </div>
                  <ItemAccordion className="text-left" Description={product.description} />
                </div>
                <div className="mt-1">
                  <AddToCartButton product={product} discountAmount={product.price} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }