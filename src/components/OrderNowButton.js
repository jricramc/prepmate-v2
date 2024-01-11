// OrderNowButton.js (in a suitable directory like components or ui)
import React from 'react';

export default function OrderNowButton() {
  const handleOrderNowClick = () => {
    // window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSda04_FSvmxd0KvrPHobXdk6JZhwtnrm6fRc4m_ZQPmOlARDQ/viewform";
    window.location.href= "https://prepmate-launch.up.railway.app"
  };

  return (
    <button 
      className="mt-4 bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-primary-light"
      onClick={handleOrderNowClick}
    >
      Order Now
    </button>
  );
}
