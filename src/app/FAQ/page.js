import React from 'react';
import AccordionFAQ from "../FAQ/FAQAccord.js";

export default function FAQ () {
  return (
    <div className="max-w-7xl px-6 pb-8 pt-5 sm:pt-5 lg:px-8 lg:pt-5 mx-auto">
      <div className="mx-auto max-w-2xl text-center pt-5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">FAQ</h2>
        <p className="text-lg leading-8 text-gray-600 mb-5">
          Here are some questions you may have about PrepMate.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/4">
        <AccordionFAQ 
          Question="What is PrepMate and how does it work?" 
          Answer="PrepMate is a unique meal  delivery service that brings together a variety of dishes from different restaurants in the Boston Metro Area. Just choose your meals from our partner restaurants, and we deliver them as a convenient meal kit to your doorstep. 
                  And you can eat when you want to, everything is ready to go!"
        />

        <AccordionFAQ 
          Question="Are there any discounts or special offers?" 
          Answer="Yes, we secure discounts ranging from 10-15% with our partner restaurants, offering you affordable and convenient dining options."
        />

        <AccordionFAQ 
          Question="Is there a minimum order amount?" 
          Answer="We have a minimum order requirement of $50 for each order to help ensure our partners can offer discounts to you."
        />

        <AccordionFAQ 
          Question="Can I order meals from multiple restaurants in one kit?" 
          Answer="Yes, you can mix and match meals from different restaurants to create your ideal meal kit. Order foods from your favorite restaurants, or try something new!"
        />

        <AccordionFAQ 
          Question="What is your cancellation or refund policy?" 
          Answer="Orders can be canceled or modified up to 24 before hours before the scheduled delivery. After this, we cannot offer any cancellations or refunds as restaurants will be making your food." 
        />

        <AccordionFAQ 
          Question="Are there any plans for expansion or new features?" 
          Answer="We're constantly working on expanding our services, including new restaurant partnerships, delivery areas, and features. We welcome any feedback or suggestions you may have!"
        />

        </div>
      </div>
    </div>
  );
}