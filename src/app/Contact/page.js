// 'use client'

// import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Switch } from '@headlessui/react'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }
  
//   export default function ContactUs() {
//     const [agreed, setAgreed] = useState(false)
//     const [submitMessage, setSubmitMessage] = useState(null);

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const formData = new FormData(e.target);
  
//       try {
//         const response = await fetch('/api/contact', {
//           method: 'POST',
//           body: formData,
//         });
  
//         if (response.ok) {
//           setSubmitMessage('Form submitted successfully');
//         } else {
//           setSubmitMessage('Form submission failed');
//         }
//       } catch (error) {
//         setSubmitMessage('An error occurred during submission');
//       }
//     };
  
//     return (
//       <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             If you have any comments, questions, or suggestions, please contact us using the form below. 
//             We will get back to you as soon as possible.
//           </p>
//         </div>
//         <form
//         action="/api/contact"
//         method="POST"
//         onSubmit={handleSubmit}
//         className="mx-auto mt-16 max-w-xl sm:mt-20"
//       >
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                     required
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                     required
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//                 <label htmlFor="userType" className='block text-sm font-semibold leading-6 text-gray-900'>
//                   Who are you?
//                 </label>
//                 <select required id="userType" className='mt-2.5 bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'>
//                   <option select="true">Choose an option</option> 
//                   <option value="customer">Customer</option>
//                   <option value="vendor">Vendor</option>
//                   <option value="affiliate">Affiliate</option>
//                   <option value="other">Other</option>
//                 </select>
//             </div>
//             <div className="sm:col-span-2">
//                 <label htmlFor="state" className="block text-sm font-semibold leading-6 text-gray-900">
//                     State
//                 </label>
//                 <select required id="state" className="mt-2.5 bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
//                         <option select="true">Choose a state</option>
//                         <option value="AL">Alabama</option>
//                         <option value="AK">Alaska</option>
//                         <option value="AZ">Arizona</option>
//                         <option value="AR">Arkansas</option>
//                         <option value="CA">California</option>
//                         <option value="CO">Colorado</option>
//                         <option value="CT">Connecticut</option>
//                         <option value="DE">Delaware</option>
//                         <option value="FL">Florida</option>
//                         <option value="GA">Georgia</option>
//                         <option value="HI">Hawaii</option>
//                         <option value="ID">Idaho</option>
//                         <option value="IL">Illinois</option>
//                         <option value="IN">Indiana</option>
//                         <option value="IA">Iowa</option>
//                         <option value="KS">Kansas</option>
//                         <option value="KY">Kentucky</option>
//                         <option value="LA">Louisiana</option>
//                         <option value="ME">Maine</option>
//                         <option value="MD">Maryland</option>
//                         <option value="MA">Massachusetts</option>
//                         <option value="MI">Michigan</option>
//                         <option value="MN">Minnesota</option>
//                         <option value="MS">Mississippi</option>
//                         <option value="MO">Missouri</option>
//                         <option value="MT">Montana</option>
//                         <option value="NE">Nebraska</option>
//                         <option value="NV">Nevada</option>
//                         <option value="NH">New Hampshire</option>
//                         <option value="NJ">New Jersey</option>
//                         <option value="NM">New Mexico</option>
//                         <option value="NY">New York</option>
//                         <option value="NC">North Carolina</option>
//                         <option value="ND">North Dakota</option>
//                         <option value="OH">Ohio</option>
//                         <option value="OK">Oklahoma</option>
//                         <option value="OR">Oregon</option>
//                         <option value="PA">Pennsylvania</option>
//                         <option value="RI">Rhode Island</option>
//                         <option value="SC">South Carolina</option>
//                         <option value="SD">South Dakota</option>
//                         <option value="TN">Tennessee</option>
//                         <option value="TX">Texas</option>
//                         <option value="UT">Utah</option>
//                         <option value="VT">Vermont</option>
//                         <option value="VA">Virginia</option>
//                         <option value="WA">Washington</option>
//                         <option value="WV">West Virginia</option>
//                         <option value="WI">Wisconsin</option>
//                         <option value="WY">Wyoming</option>

//                 </select>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                     required
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="email"
//                   className="bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Phone number
//               </label>
//               <div className="relative mt-2.5">
//                 <div className="absolute inset-y-0 left-0 flex items-center">
//                   <label htmlFor="country" className="sr-only">
//                     Country
//                   </label>
//                   <select
//                     id="country"
//                     name="country"
//                     className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
//                   >
//                     <option>US</option>
//                     <option>CA</option>
//                   </select>
//                   <ChevronDownIcon
//                     className="pointer-events-none absolute right-3 top-0 h-full w-5 text-black"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <input
//                     required
//                   type="tel"
//                   name="phone-number"
//                   id="phone-number"
//                   autoComplete="tel"
//                   className="bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
//                 Message
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                     required
//                   name="message"
//                   id="message"
//                   rows={4}
//                   className="bg-gray-100 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//             </div>
//             <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
//               <div className="flex h-6 items-center">
//                 <Switch
//                   checked={agreed}
//                   onChange={setAgreed}
//                   className={classNames(
//                     agreed ? 'bg-primary' : 'bg-gray-200',
//                     'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
//                   )}
//                 >
//                   <span className="sr-only">Agree to policies</span>
//                   <span
//                     aria-hidden="true"
//                     className={classNames(
//                       agreed ? 'translate-x-3.5' : 'translate-x-0',
//                       'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
//                     )}
//                   />
//                 </Switch>
//               </div>
//               <Switch.Label className="text-sm leading-6 text-gray-600">
//                 By selecting this, you agree to our{' '}
//                 <a href="#" className="font-semibold text-primary underline hover:no-underline">
//                   privacy&nbsp;policy
//                 </a>
//                 .
//               </Switch.Label>
//             </Switch.Group>
//           </div>
//           <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
//           >
//               Let's talk
//             </button>
//           </div>
//         </form>
//         {submitMessage && <p className="mt-4 text-green-500">{submitMessage}</p>}
//       </div>
//     )
//   }

import React from 'react';

export default function ContactUs() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you have any comments, questions, or suggestions, please contact us using the form below. We will get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10">
        <a
          href="mailto:founder@prepmate.shop"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Contact Us via Email
        </a>
      </div>
    </div>
  );
}
