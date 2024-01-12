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
    {/* <div class="sr-element sr-products" data-embed="multiple_products"><script type="application/json">{"publishable_key":"sr_live_pk_0ac696797e14d49ca01f523ffb8d962e670f","options":{"products_to_display":"all","categories":[],"product_size":"medium","image_dimension_value":"crop","image_aspect_ratio":"portrait","button_style":"standard","variation_style":"on_hover","open_product_in":"in_page","button_position":"inline","product_default_sorting_order":"product_order","product_pagination_limit":"3","hide_out_of_stock":"0"},"includes":{"show_search_box":"1","show_sort_by":"1","show_per_page":"1","show_category_dropdown":"1","show_currency_dropdown":"1","show_language_dropdown":"1","show_product_filters":"1","show_product_name":"1","show_product_price":"1","show_product_image":"1","show_product_summary":"1","open_modal_on_image_click":"1","show_view_product_button":"1","show_add_to_cart_button":"1","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","image_swap":"1","show_button_icons":"1"},"product_popup":{"show_product_name":"1","show_product_price":"1","show_product_summary":"1","show_product_description":"1","show_product_image":"1","show_select_quantity":"1","show_image_thumbnails":"1","show_product_reviews":"1","show_product_sku":"1","show_product_categories":"1","show_social_sharing_icons":"1","show_related_products":"1","thumbnail_layout":"horizontal_below","image_dimension_value":"crop","image_aspect_ratio":"portrait","variation_styling":"dropdown","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","show_product_tabs":"1","image_zoom":"1","lightbox_gallery":"1"},"styles":{"align_content":"center","product_title":"#314d5d","product_price":"#2d2d2d","product_summary":"#777777","button_background":"#233642","button_color":"#ffffff","view_product_button_background":"#233642","view_product_button_color":"#ffffff","view_cart_button_background":"#233642","view_cart_button_color":"#ffffff","product_background":"#ffffff","modal_background":"#ffffff","popup":{"colors":{"product_title":"#333","product_price":"#666666","product_summary":"#666666","button_background":"#233642","button_color":"#ffffff","product_active_tab_background":"#f5f5f5"}}}}</script></div><script async src="https://cdn.shoprocket.io/loader.js"></script> */}

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
            <a href="https://prepmate-launch.up.railway.app" target= "_blank" className="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white 
                                shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-red-500">Order and Save</a>
        </div>
    </div>
    </section>

  </>
  )
}
