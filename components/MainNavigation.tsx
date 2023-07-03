'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const MainNavigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.label}>
            <Link className={isActive ? 'text-gray-700 hover:text-gray-700' : 'hover:text-gray-700'} href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MainNavigation;