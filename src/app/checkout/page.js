'use client'
import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { allProducts } from '@/data/data'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const deliveryMethods = [
        { id: 1, title: 'Sunday Jan 21', price: '$2.99', time: '5 - 9PM' },
        { id: 2, title: 'Wednesday Jan 24', price: '$2.99', time:'5 - 9PM' },
      ]
    const cartItems = useSelector((state) => state);
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0]);

    useEffect(() => {
        let total = 0;
        allProducts.forEach(product => {
          total += parseFloat(product.price); // assuming product.price is a string
        });
        setSubtotal(total);
      }, [allProducts]);

    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    const taxes = (subtotal * 0.12).toFixed(2);
    const deliveryPrice = parseFloat(selectedDeliveryMethod.price.replace('$', ''));
    const total = subtotal + deliveryPrice + parseFloat(taxes);

    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Checkout</h2>
            </div>

            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
                <div>
                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                <div className="mt-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                    </div>
                </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Delivery information</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                        Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                    </label>
                    <div className="mt-1">
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        >
                        <option>United States</option>
                        </select>
                    </div>
                    </div>

                    <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Postal code
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        maxLength="10"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                    </div>
                    </div>
                </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                    <RadioGroup.Label className="text-lg font-medium text-gray-900">Delivery method</RadioGroup.Label>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {deliveryMethods.map((deliveryMethod) => (
                        <RadioGroup.Option
                        key={deliveryMethod.id}
                        value={deliveryMethod}
                        className={({ checked, active }) =>
                            classNames(
                            checked ? 'border-transparent' : 'border-gray-300',
                            active ? 'ring-2 ring-primary' : '',
                            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                            )
                        }
                        >
                        {({ checked, active }) => (
                            <>
                            <span className="flex flex-1">
                                <span className="flex flex-col">
                                <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                    {deliveryMethod.title}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                    as="span"
                                    className="mt-1 flex items-center text-sm text-gray-500"
                                >
                                    {deliveryMethod.time}
                                </RadioGroup.Description>
                                <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                    {deliveryMethod.price}
                                </RadioGroup.Description>
                                </span>
                            </span>
                            {checked ? <CheckCircleIcon className="h-5 w-5 text-primary" aria-hidden="true" /> : null}
                            <span
                                className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-primary' : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg'
                                )}
                                aria-hidden="true"
                            />
                            </>
                        )}
                        </RadioGroup.Option>
                    ))}
                    </div>
                </RadioGroup>
                </div>
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0 sticky top-1000">
                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                    <ul role="list" className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                            <div>{item.name}</div>
                            <div>${item.price}</div>
                            </li>
                        ))}
                    </ul>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                    <dt className="text-sm">Delivery</dt>
                    <dd className="text-sm font-medium text-gray-900">{selectedDeliveryMethod.price}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes & Fees</dt>
                    <dd className="text-sm font-medium text-gray-900">${taxes}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">{total}</dd>
                    </div>
                </dl>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className='text-sm pb-2'>
                        <p className='text-xs'>
                        By clicking Checkout you agree to our <a className='text-primary' href='/Privacy'> Privacy Policy </a> and <a className='text-primary' href='/Terms'> Terms. </a>
                        </p>
                        <br /> 
                        <p>
                        <b>Please Use Same Email On Stripe As Your Delivery Details.</b>
                        </p>
                    </div>
                    <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                    Checkout
                    </button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    )
}
