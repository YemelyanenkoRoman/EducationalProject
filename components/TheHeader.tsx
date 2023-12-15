'use client';
import Image from 'next/image';

import Directions from './directions/Directions';
import Navigation from './MainNavigation';
import Link from 'next/link';
import Modal from './Modal';
import { useColor } from './ColorNavigation';
import BurgerMenu from './BurgerMenu';
import { useWindowWidth } from '@/utils/hooks/useWindowWidth';

export const NavItems = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

const TheHeader = () => {
  const color = useColor();
  const width = useWindowWidth();

  return (
    <header
      className={`${color.textColor} ${color.bgColor} font-poppins text-sexteen font-normal fixed top-0 left-0 w-full z-50 `}
    >
      <div className="mx-auto">
        <nav className="flex justify-between items-center md:h-[107px]   xl:px-[60px]   md:px-[30px]   xs:h-[97px] xs:px-[16px]">
          <div className="flex items-center">
            <div className=" xl:mr-[201px] md:mr-[177px]">
              <Link href="/">
                <div className="xs:hidden md:block md:w-[135px] md:h-[47px]">
                  <Image
                    src="/logo/technocat-logo-max 1.svg"
                    alt="Главный логотип образовательного центра ТехноКот"
                    width={0}
                    height={0}
                    priority={true}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>

                <div className="xs:block md:hidden xs:w-[120px]">
                  <Image
                    src="/logo/technocat-logo-min.png"
                    alt="Главный логотип образовательного центра ТехноКот"
                    width={0}
                    height={0}
                    priority={true}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>
            {width >= 768 ? (
              <ul className="flex gap-[46px] ">
                <Navigation navLinks={NavItems} />
                <Directions />
              </ul>
            ) : (
              <></>
            )}
          </div>
          <div className={width > 768 ? '' : 'flex '}>
            <Modal
              textColor={color.textColor}
              svgHover={color.svgHover}
              svgStroke={color.svgStroke}
              bgColor={color.bgColor}
              hoverColor={color.hoverColor}
            />
            {width >= 768 ? (
              <></>
            ) : (
              <div className="flex items-center">
                <BurgerMenu />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export { TheHeader };
