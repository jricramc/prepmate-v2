import RestaurantList from "../menu/RestaurantList";
import SectionHeader from "./SectionHeaders";

export default function HomeRestaurants() {
    return (
        <section className="px-4">
            <div className="text-center mb-4 mt-4">
                <SectionHeader mainHeader="Our Partners" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <RestaurantList name="Life Alive" 
                description="Organic, plant-based cafe in the Boston area serving food that is good for you and good for the planet." 
                img= "/hongkong.jpeg" />

                <RestaurantList name="Spice Delight" 
                description="With our array of spices and ingredients we bring you the finest Indian Cuisine in Massachusetts."
                img= "dosa.jpeg" />

                <RestaurantList name="Mill City" 
                description="Ready to go meal kits featuring rice bowls, pastas, and more." 
                img = "mill.jpeg"/>

                <RestaurantList name="Silk Road" 
                description="At Silk Road Uyghur Cuisine, we proudly prepare and serve a mix of authentic Uyghur and Central Asian dishes."
                img= "silk-road.jpg" />
               
            </div>
        </section>
    );
}