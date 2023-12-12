import Right from "../icons/Right";
import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero md:mt-8 p-4 flex">
      <div className="px-1 md:py-12 mx-auto">
        <h1 className="text-4xl font-semibold">
          Savor More<br />
          Spend Less<br />
          Join&nbsp;
          <span className="text-primary">
            PrepMate
          </span>
        </h1>
        <p className="my-6 text-gray-700 text-md">
            Select and Order: <br />
            Top Local Meals Prepped for You. <br />
            Satisfaction is Just a Click Away.
        </p>
        <div className="gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full" href="/order">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 px-5 py-2 text-gray-600 font-semibold" href="/learn">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="md:block sm:hidden mx-auto">
  <Image
    src="/meal-prep-img-home.png"
    width={400}
    height={20}
    layout="responsive"
    alt="meals"
  />
</div>
    </section>
  );
}