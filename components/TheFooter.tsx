import { v4 as uuidv4 } from 'uuid';
import { NavItems } from './TheHeader';
import Navigation from '../components/MainNavigation';
import Link from 'next/link';

import LogoMin from '../public/logo/technocat-logo-min.svg';
import AcademicCap from '../public/icons/academic-cap-24-px.svg';
import Book from '../public/icons/book-24-px.svg';
import Location from '../public/icons/location-pin-24-px.svg';
import Time from '../public/icons/time-24-px.svg';
import Instagram from '../public/icons/instagram-16-px.svg';

const NavFooterDirection = [
  { label: 'Программированию', href: '/' },
  { label: 'Робототехнике', href: '/' },
  { label: 'Английскому языку', href: '/' },
  { label: 'Подготовим к школе', href: '/' },
  { label: 'Поможем первокласснику', href: '/' },
];

const TheFooter = () => {
  return (
    <footer className="font-poppins text-local-gray-t text-sexteen font-normal bg-local-gray-b">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center h-[209px] px-[60px]">
          <div className="flex">
            <div className="max-w-[100px] max-h-[109px] flex flex-col mr-[125px]">
              <Link href="/">
                <LogoMin />
              </Link>
              <ul className="mt-5 flex gap-2 flex-col">
                <Navigation navLinks={NavItems} />
              </ul>
            </div>
            <div className="flex gap-14">
              <div className=" flex flex-col">
                <div className="flex flex-row">
                  <AcademicCap />
                  <h2 className="ml-[10px] font-gilroy text-twenty">Мы научим</h2>
                </div>
                <ul className="mt-5 flex gap-2 flex-col">
                  {NavFooterDirection.slice(0, 3).map((link) => {
                    return (
                      <li key={uuidv4()} className="flex ">
                        <Link className="hover:text-gray-700 flex " href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Book />
                  <h2 className="ml-[10px] font-gilroy text-twenty">Мы поможем</h2>
                </div>
                <ul className="mt-5 flex gap-2 flex-col">
                  {NavFooterDirection.slice(3, 5).map((link) => {
                    return (
                      <li key={uuidv4()} className="flex ">
                        <Link className="hover:text-gray-700 flex " href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col max-w-[175px] ">
              <div className="flex flex-row">
                <Location />
                <h2 className="ml-[10px] font-gilroy text-twenty">Мы находимся</h2>
              </div>
              <Link className="mt-5" href="/">
                г. Гомель, ул. Кирова, д. 55, каб. 318
              </Link>
            </div>
            <div className="flex flex-col max-w-[185px]">
              <div className="flex flex-row">
                <Time />
                <h2 className="ml-[10px] font-gilroy text-twenty">Мы на связи</h2>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p>ежедневно: 9:00-20:30</p>
                <p>+ 375 (29) 330-20-79</p>
                <Link className="flex" href="/">
                  <Instagram /> <p className="ml-[6px]">Instagram</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
