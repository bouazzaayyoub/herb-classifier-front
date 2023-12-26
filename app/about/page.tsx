import Link from 'next/link';
import React from 'react';

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2  opacity-30"
      >
        <div className="h-60 bg-gradient-to-br from-green-600 to-green-400 blur-[200px] " />
        <div className="h-40 bg-gradient-to-r from-green-400 to-green-300 blur-[200px] " />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">
              About <span className="text-green-500 dark:text-white">Us.</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt nam itaque sed eius modi error totam sit illum. Voluptas
              doloribus asperiores quaerat aperiam. Quidem harum omnis beatae
              ipsum soluta!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="/start"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </Link>
              {/* <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:border before:inset-0 before:rounded-full before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a> */}
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The lowest price
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The fastest on the market
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The most loved
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
