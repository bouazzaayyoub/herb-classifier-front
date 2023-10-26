'use client';

import Image from 'next/image';
import NavLink from './NavLink';

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Classify Your herbs with Ease
          </h1>
          <p className="max-w-xl mx-auto">
            Instantly Identify and Classify herbs with Our Herbal Classifier,
            completely for free
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/start"
              className="text-white bg-green-600 hover:bg-green-500 active:bg-green-700"
            >
              Identify My Herb
            </NavLink>
            <NavLink
              target="_blank"
              href="lore"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Learn more
            </NavLink>
          </div>
          <div className="flex justify-center pt-10">
            <Image
              alt="image"
              src="/hero.jpeg"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
