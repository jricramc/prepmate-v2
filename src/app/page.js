import Hero from '../pages/layout/hero'
import HomeMenu from '../pages/layout/HomeRestaurants'
import SectionHeader from '../pages/layout/SectionHeaders'

export default function Home() {
  return (
  <>
    <Hero />
    <HomeMenu />
    <section className='text-center my-12 p-4'>
  <SectionHeader mainHeader="A Fresh Take On Ordering Out" />
  <div className='mx-auto text-gray-800 mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 p-5 items-center'>
    <div className='aspect-w-16 aspect-h-9 w-full mb-4 md:mb-0 md:mr-4 md:col-start-2 md:col-span-4'>
      <img src={'/healthy-meal-prep-dinners-teg-new-featured.jpg'} className="object-cover w-full h-full" alt={'meals'} />
    </div>
    <div className='md:col-start-6 md:col-span-6 text-left text-lg'>
      At PrepMate, we're revolutionizing the dining experience. Our service goes beyond the traditional meal plan, 
      offering unprecedented ease and flexibility. With our intuitive app, managing your culinary journey is a breeze. 
      Here's what sets us apart: <br /> <br />
      <div className='ml-5'>
        <ul className='list-disc'>
          <li className='mb-4'>
            <b>Handpicked Restaurants, Just for You: </b>We carefully curate our selection of restaurants, ensuring that 
              you have access to top-quality meals that span a wide range of cuisines and styles. Whether you're craving 
              comfort food or adventurous flavors, our diverse offerings cater to every palate.
          </li>
          <li className='mb-4'>
            <b>Simplified Meal Subscriptions: </b>Say goodbye to the hassle of daily meal decisions. With PrepMate, 
              subscribing to your favorite local meals is as easy as a few clicks. Our platform is designed to make meal 
              planning seamless, giving you more time to savor and less time stressing.
          </li>
          <li className='mb-4'>
            <b>Support Local, Eat Global: </b>By choosing PrepMate, you're not just treating yourself to delicious meals; you're 
              also supporting the heart and soul of your community – the local restaurants. Indulge in a world of flavors while 
              contributing to the local economy.
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSda04_FSvmxd0KvrPHobXdk6JZhwtnrm6fRc4m_ZQPmOlARDQ/viewform" target= "_blank" className="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white 
                                shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-red-500">Order and Save</a>
        </div>
    </div>
    </section>
  </>
  )
}
