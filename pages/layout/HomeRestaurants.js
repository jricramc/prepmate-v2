import RestaurantList from "../menu/RestaurantList";
import SectionHeader from "./SectionHeaders";

export default function HomeRestaurants() {
    return (
        <section className="px-4">
            <div className="text-center mb-4 mt-4">
                <SectionHeader mainHeader="Our Partners" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <RestaurantList />
                <RestaurantList />
                <RestaurantList />
                <RestaurantList />
            </div>
        </section>
    );
}