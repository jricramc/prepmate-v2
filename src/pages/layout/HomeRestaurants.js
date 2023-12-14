import RestaurantList from "../menu/RestaurantList";
import SectionHeader from "./SectionHeaders";

export default function HomeRestaurants() {
    return (
        <section className="px-4">
            <div className="text-center mb-4 mt-4">
                <SectionHeader mainHeader="Our Partners" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <RestaurantList name="Hong Kong" 
                description="Harvard Square's  authentic Chinese food and signature Scorpion Bowl" 
                img= "/hongkong.jpeg" />

                <RestaurantList name="Dosa N Curry" 
                description="A 100% vegetarian, North Indian, South Indian and Indo-Chinese eatery"
                img= "dosa.jpeg" />

                <RestaurantList name="Mill City Pizza" 
                description="Authentic pizza crust should be crispy on the outside and practically melt in your mouth shortly after you bite into it" 
                img = "mill.jpeg"/>

                <RestaurantList name="Five Spices House" 
                description="Boston Authentic Sichuan Restaurant with a variety of proteins available from beef and chicken to brown beech mushrooms for vegetarians "
                img= "five.png" />
               
            </div>
        </section>
    );
}