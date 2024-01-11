import React from 'react';
import AccordionFAQ from "../FAQ/FAQAccord.js";

export default function FAQ () {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl text-center pt-5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Privacy Policy</h2>
        <p className="text-lg leading-8 text-gray-600 mb-5">
          Here are some questions you may have about our service.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <AccordionFAQ 
            Question="How do I get a coffee?" 
            Answer="You can get a coffee by going to the coffee machine and pressing the button."
          />
        </div>
      </div>
    </div>
  );
}