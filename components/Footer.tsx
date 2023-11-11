import Image from 'next/image';

const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t">
        <p className="text-gray-600">
          Created by{' '}
          <a
            href="https://twitter.com/bouazzayyoub"
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
    </div>
  </footer>
);

export default Footer;
