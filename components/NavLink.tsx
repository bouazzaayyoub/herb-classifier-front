import Link from 'next/link';

const NavLink = ({ children, href, ...props }: any) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-6 text-center rounded-full duration-150 ${
      props?.className || ''
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
