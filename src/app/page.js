import Hero from '../pages/layout/hero'
import HomeMenu from '../pages/layout/HomeRestaurants'
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
              Choose Your Meals: Browse our diverse menu and select your favorite dishes from local restaurants. With PrepMate, you have the freedom to mix and match meals, creating your perfect meal plan for 3-4 days.
              </li>
              <li className='mb-4'>
              Order by the Deadline: Make sure to place your order by 12 PM on either Saturday or Tuesday. This schedule helps us ensure that everything is fresh and ready for you.
              </li>
              <li className='mb-4'>
              Relax and Wait for Delivery: Your carefully curated meal kit will be delivered to your doorstep the following day, between 5-9 PM. Enjoy the convenience of having multiple days' worth of delicious meals without the daily hassle of planning and cooking.
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
    {/* <section className='text-center my-12 p-4'>
      <SectionHeader mainHeader="So whats the point?" />
      <div className='mx-auto text-gray-800 mt-4 grid grid-cols-1 md:grid-cols-10 gap-4 p-5'>
        <div className='md:col-span-5 text-left'>
        <div className='text-2xl font-semibold'>
          Quality Food Should NOT Be This Costly. <br /> <br />
        </div>
        <div className=''>
            The average individual spends approximately $412.26 monthly on groceries, with millennials adding another 
            $408 on ordering food. When you factor in 60-90 minutes daily spent on cooking, the cumulative cost (both 
            monetary and time-wise) becomes substantial. It's not just the $820 monthly food bill; it's also the hours 
            spent that could be used for more fulfilling activities.
        <br /> <br />
            In the pursuit of convenience, many turn to meal delivery services like Factor75, Blue Apron, and EveryPlate. 
            However, these options often fall short in quality, relying on additives and preservatives. Furthermore, the 
            cost of ordering out for a single night can range from $20-$30 – a price point that adds up quickly over a month.
        <br /> <br />
            With PrepMate, you can now order food twice a week to ensure freshness and variety. 
            Our bulk ordering system allows for significant cost savings, with the average meal priced at just $10. If you choose 
            to order dinner through us every day of the month, you're not only saving on your food bill but also freeing up 
            approximately $120 for other pursuits. Imagine the possibilities – more time for movies, kickstarting a side hustle, 
            or enjoying moments with friends – all while enjoying delicious, quality meals without the hefty price tag.
        <br /> <br />
        </div>
      </div>
      <div className='aspect-w-16 aspect-h-9 w-full mb-4 md:mb-0 md:mr-4 md:col-span-5'>
          <img src={'/takeout.jpg'} className="object-cover w-full h-full" alt={'meals'} />
      </div>
    </div>
    </section> */}
    <section className='text-center my-12 p-4'>
    <div className="py-5 px-4 mx-auto max-w-screen-xl sm:py-5 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">What are you waiting for?</h2>
            <a href="https://prepmate-launch.up.railway.app" target= "_blank" className="relative inline-flex items-center gap-x-1 rounded-md bg-primary px-8 py-4 text-sm font-semibold text-white 
                                shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-red-500">Order and Save</a>
        </div>
    </div>
    </section>

  </>
  )
}
