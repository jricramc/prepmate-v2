import Hero from '../pages/layout/hero'
import SectionHeader from '../pages/layout/SectionHeaders'

export default function Home() {
  return (
  <>
    <Hero />
    <section className='text-center my-12 p-4'>
      <SectionHeader mainHeader="How does it work?" />
      <div className='mx-auto text-gray-800 mt-4 gap-4 p-5 items-center'>
        <div className='md:col-start-6 md:col-span-6 text-left text-lg'>
          <div className='ml-5'>
            <ul className='list-disc'>
              <li className='mb-4'>
              Choose Your Meals: Browse our diverse menu and select your favorite dishes from local restaurants. 
              With PrepMate, you have the freedom to mix and match meals, creating your perfect meal plan for 3-4 days.
              </li>
              <li className='mb-4'>
              Order by the Deadline: Make sure to place your order by 5 PM on either Saturday or Tuesday. 
              This schedule helps us ensure that everything is fresh and ready for you.
              </li>
              <li className='mb-4'>
              Wait for Delivery: Your carefully curated meal kit will be delivered to your doorstep the following day, between 5-9 PM. 
              Enjoy the convenience of having multiple days' worth of delicious meals without the daily hassle of planning and cooking.
              </li>
              <li className='mb-4'>
              Relax and Enjoy: Just heat up when you have time, whether it's 2PM or 2AM, and enjoy a delicious meal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <HomeMenu /> */}
    <section className='text-center my-12 p-4'>
      <SectionHeader mainHeader="A Fresh Take On Ordering Out" />
      <div className='mx-auto text-gray-800 mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 p-5 items-center'>
        <div className='aspect-w-16 aspect-h-9 w-full mb-4 md:mb-0 md:mr-4 md:col-start-2 md:col-span-4'>
          <img src={'/healthy-meal-prep-dinners-teg-new-featured.jpg'} className="object-cover w-full h-full" alt={'meals'} />
        </div>
        <div className='md:col-start-6 md:col-span-6 text-left text-lg'>
          PrepMate is redefining dining out with our innovative meal kit service. Our easy-to-use app brings you a diverse selection 
          of meals from the best local restaurants, with the unique twist of mixing and matching dishes in one order. Enjoy the freedom 
          of customizing your dining experience, blending different cuisines from multiple eateries in one meal kit.
        <br /> <br />
          <div className='ml-5'>
            <ul className='list-disc'>
              <li className='mb-4'>
                <b>Your Culinary Adventure, Simplified: </b> Choose your favorite dishes with just a few clicks. Our subscription service 
                makes meal planning hassle-free, giving you more time to enjoy diverse, delicious meals.
              </li>
              <li className='mb-4'>
                <b>Support Local, Savor Global: </b>With every order, you're not just indulging in exquisite meals; you're also supporting 
                your local food scene. Experience a world of flavors while bolstering your community.
              </li>
              <li className='mb-4'>
                <b>Join the Revolution </b>PrepMate isn't just about ordering food; it's about enjoying a culinary journey that's as unique as your taste. Mix, match, and savor the best of your local restaurants, all through a single, convenient service.
              </li>
            </ul>
          </div>
          Join us at PrepMate and experience the future of dining—where convenience meets culinary excellence.
        </div>
      </div>
    </section>
    <section className='text-center my-12 p-4'>
    <div className="py-5 px-4 mx-auto max-w-screen-xl sm:py-5 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">What are you waiting for?</h2>
            <a href="/Restaurants" target= "_blank" className="relative inline-flex items-center gap-x-1 rounded-md bg-primary px-8 py-4 text-sm font-semibold text-white 
                                shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-red-500">Order and Save</a>
        </div>
    </div>
    </section>

  </>
  )
}
