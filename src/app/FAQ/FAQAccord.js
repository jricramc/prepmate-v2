"use client";

import React, { useState, useEffect } from 'react';

export default function AccordionFAQ({ Question, Answer }) {
    
    const [accordionOpen, setAccordionOpen] = useState(false);

    useEffect(() => {
      setAccordionOpen(false)
    }, [])
  
    return (
      <div className="py-3">
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold"
            onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-01`}
          >
            <span>{Question}</span>
            <svg className="fill-primary shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            </svg>           
          </button>        
        </h2>
        <div
          id={`accordion-text-01`}
          role="region"
          aria-labelledby={`accordion-title-01`}
          className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="pb-3 mt-2">
              {Answer}
            </p>
          </div>
        </div>
      </div>
    )
}