import Image from 'next/image';

const Footer = () => (
  <footer className="flex custom-screen py-16 justify-between items-end md:items-center">
    <div className="">
      <p className="text-gray-600 text-sm md:text-base ">
        Created by{' '}
        <a
          href="https://twitter.com/AyyoubBouazza"
          target="_blank"
          className="hover:underline transition font-bold text-green-600"
        >
          Ayyoub
        </a>{' '}
        and{' '}
        <a
          href="https://twitter.com/miliariadnane"
          target="_blank"
          className="hover:underline transition font-bold text-green-600"
        >
          Adnane
        </a>
        .
      </p>
      <div className="mt-3 flex -space-x-1">
        <Image
          src="/adnane.jpeg"
          className="rounded-full w-10 h-10 object-cover ring-4 ring-gray-100"
          alt="user avatar"
          width={40}
          height={40}
        />
        <Image
          src="/ayyoub.png"
          className="rounded-full w-10 h-10 object-cover ring-4 ring-gray-100"
          alt="user avatar"
          width={40}
          height={40}
        />
      </div>
    </div>
    <div className="flex items-center">
      <Image
        src="/palestine.png"
        className="shadow-lg rounded-full"
        alt=""
        height={40}
        width={40}
      />
      <span className="ms-2 font-medium text-base capitalize text-gray-700">
        #FreePalestine
      </span>
    </div>
  </footer>
);

export default Footer;
