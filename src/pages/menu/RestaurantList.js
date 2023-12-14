import React from 'react';

export default function RestaurantList({ name, description, img }) {

  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md hover:bg-red-100 transition-all max-w-sm m-auto">
      <div className="text-center">
        <img src={img} className="max-h-auto max-h-32 block mx-auto" layout="fill" alt="prep" />
      </div>
      <h4 className="font-semibold my-3">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSda04_FSvmxd0KvrPHobXdk6JZhwtnrm6fRc4m_ZQPmOlARDQ/viewform"
        target="_blank"
        className="bg-primary text-white rounded-full px-8 py-0.5 text-sm font-semibold hover:bg-primary-light"
      >
        Order Now
      </a>
    </div>
  );
}


