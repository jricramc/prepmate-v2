export default function RestaurantList() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md hover:bg-red-100 transition-all max-w-sm m-auto">
            <div className="text-center ma">
                <img src="/-prep-img-home.png" className="max-h-auto max-h-32 block mx-auto" layout="fill" alt=" prep" />
            </div>
            <h4 className="font-semibold my-3">Mill City Pizza</h4>
            <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-primary-light"> Order Now</button>
        </div>
    );
}
