import Right from "../icons/Right";
import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
  // const orderNowLink = "https://docs.google.com/forms/d/e/1FAIpQLSda04_FSvmxd0KvrPHobXdk6JZhwtnrm6fRc4m_ZQPmOlARDQ/viewform?usp=sf_link";
  const orderNowLink= "/Restaurants";

  return (
    <section className="hero md:mt-8 p-4 flex">
      <div className="px-1 md:py-12 mx-auto">
        <h1 className="text-4xl font-semibold">
          Spend Less<br />
          Money and Time<br />
          On Food<br />
          And Join&nbsp;
          <span className="text-primary">
            PrepMate
          </span>
        </h1>
        <p className="my-6 text-gray-700 text-md">
          Select and Order: <br />
          Top Local Meals Prepped for You. <br />
          Satisfaction is Just a Click Away.
        </p>
        <div className="flex flex-col items-center gap-4 text-sm">
          <a
            href={orderNowLink}
            target="_blank" // This opens the link in a new tab
            className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Order now
            <Right />
          </a>
          <button className="flex items-center border-0 gap-2 px-5 py-2 text-gray-600 font-semibold" href="/about">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="md:block sm:hidden mx-auto">
        <Image
          src="/meal-prep-img-home.png"
          width={800}
          height={20}
          style={{ width: '100%', height: 'auto' }}
          alt="meals"
        />
      </div>
    </section>
  );
}
