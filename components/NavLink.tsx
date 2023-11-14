import Link from 'next/link';

const NavLink = ({ children, href, ...props }: any) => (
  <Link
    href={href}
    {...props}
    className={`relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-600 before:active:bg-green-800 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ${
      props?.className || ''
    }`}
  >
    <span className="relative text-base font-semibold text-white">
      {children}
    </span>
  </Link>
);

export default NavLink;
