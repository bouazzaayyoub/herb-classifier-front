/* eslint-disable react/no-unescaped-entities */
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
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-justify">
              Welcome to Herbify, a web application developed to help
              differentiate between two commonly confused herbs in Morocco -
              coriander and parsley, known locally as qazbor and maadanous. This
              app was created by a team of passionate developers and plant
              enthusiasts looking to solve a widespread challenge faced by many
              Moroccans while grocery shopping.
            </p>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-justify">
              The inspiration behind Herbify came from our own difficulties
              distinguishing between qazbor and maadanous. We realized there was
              a need for a simple tool to help identify these herbs accurately,
              ensuring people buy the right ingredient for their recipes.
            </p>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-justify">
              To build Herbify, we leveraged a convolutional neural network
              created with DeepLearning4J. This AI model was trained on hundreds
              of images of coriander and parsley to recognize the subtle visual
              differences between the two. Now, our app can receive
              user-uploaded images of either herb and identify it correctly.
            </p>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-justify">
              We're proud to offer this AI-powered application as a handy
              reference source for anyone unsure between qazbor and maadanous.
              Herbify takes the guesswork out of herb shopping and gives you
              confidence you're choosing the right ingredient every time. Our
              goal is to continue improving Herbify by expanding the herb
              catalogue and increasing the accuracy of the identification
              technology. We are also working to provide a mobile solution in
              the future, making herb identification accessible anywhere.
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
                  Solving a Widespread Challenge
                </h6>
                <p className="mt-2 text-gray-500"></p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Powered by AI Technology
                </h6>
                <p className="mt-2 text-gray-500"></p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Your Pocket Herb Assistant
                </h6>
                <p className="mt-2 text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
