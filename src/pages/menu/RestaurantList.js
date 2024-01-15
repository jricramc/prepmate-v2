import React from 'react';

export default function RestaurantList({ name, description, img, orderLink = "https://prepmate-launch.up.railway.app" }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md hover:bg-red-100 transition-all max-w-sm max-h-500 flex flex-col justify-between">
      <div>
        <div className="text-center">
          <img src={img} className="max-h-auto max-h-32 block mx-auto" layout="fill" alt="prep" />
        </div>
        <h4 className="font-semibold my-3">{name}</h4>
        <p className="text-gray-600 text-sm pb-2">{description}</p>
      </div>
      <a
        href= {orderLink}
        target="_blank"
        className="bg-primary text-white rounded-full px-10 py-1 text-md mt-2 font-semibold hover:bg-primary-light mb-3"
      >
        Order Now
      </a>
    </div>
  );
}

