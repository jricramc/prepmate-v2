import RestaurantList from "@/pages/menu/RestaurantList";

export default function RestaurantPage() {
    return (
        <div className="mb-10 mt-10">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Restaurants</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8">
            <RestaurantList name="Life Alive" 
                description="Organic, plant-based cafe in the Boston area serving food that is good for you and good for the planet." 
                img= "/hongkong.jpeg" 
                // orderLink="/stores/life-alive"
                />

                <RestaurantList name="Spice Delight" 
                description="With our array of spices and ingredients we bring you the finest Indian Cuisine in Massachusetts."
                img= "dosa.jpeg" 
<<<<<<< HEAD
                // orderLink="/stores/spice-delight"
                />
=======
                orderLink="/stores/life-alive"/>
>>>>>>> 8b507f444cd27872bb84da22675b07811ee4c548

                <RestaurantList name="Mill City" 
                description="Ready to go meal kits featuring rice bowls, pastas, and more." 
                img = "mill.jpeg"
<<<<<<< HEAD
                // orderLink="/stores/mill-city"
                />
=======
                orderLink="/stores/life-alive"/>
>>>>>>> 8b507f444cd27872bb84da22675b07811ee4c548

                <RestaurantList name="Silk Road" 
                description="At Silk Road Uyghur Cuisine, we proudly prepare and serve a mix of authentic Uyghur and Central Asian dishes."
                img= "silk-road.jpg" 
<<<<<<< HEAD
                // orderLink="/stores/silk-road"
                />
=======
                orderLink="/stores/life-alive"/>
>>>>>>> 8b507f444cd27872bb84da22675b07811ee4c548
               
            </div>
            <div className="text-center mt-8 text-xl">
                <h3 className="font-semibold">Want to sign your restaurant onto our platform? Fill out the form below. 
                                                <br /> We will reach out to you within 24-48 hours!</h3>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                
            </div>
        </div>
    );
}