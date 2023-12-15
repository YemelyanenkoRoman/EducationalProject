'use client';
import styles from '@/components/sliders/sliderSynking/SliderSynking.module.css';
import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useWindowWidth } from '@/utils/hooks/useWindowWidth';

interface Images {
  src: any;
  alt: string;
}

const Images: Images[] = [
  { src: '/aboutPage/Slider1.png', alt: 'My Image' },
  { src: '/aboutPage/Slider2.png', alt: 'My Image' },
  { src: '/aboutPage/Slider3.png', alt: 'My Image' },
  { src: '/aboutPage/Slider4.png', alt: 'My Image' },
  { src: '/aboutPage/Slider5.png', alt: 'My Image' },
  { src: '/aboutPage/Slider6.png', alt: 'My Image' },
  { src: '/aboutPage/Slider7.png', alt: 'My Image' },
];

export const AsNavFor = () => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const width = useWindowWidth();
  const settings1 =
    width >= 1280
      ? {
          speed: 500,
          adaptiveHeight: true,
          arrows: true,
        }
      : width >= 768
      ? {
          speed: 500,
          adaptiveHeight: true,
        }
      : {
          speed: 500,
          adaptiveHeight: true,
        };

  const settings = {
    arrows: true,
    adaptiveHeight: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '120px',
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <div className="md:w-[810px] xs:w-full xs:overflow-x-hidden mx-auto">
      <div className="md:w-[810px] xs:w-full xs:overflow-x-hidden mb-1">
        <Slider {...settings1} asNavFor={nav2} ref={(slider) => setNav1(slider || undefined)}>
          {Images.map((item, index) => {
            return (
              <div key={index} className="hover:cursor-grab active:cursor-grabbing">
                <div className="w-auto h-auto">
                  <Image width={810} height={400} src={item.src} alt={item.alt} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="w-[810px] ">
        <Slider
          {...settings}
          asNavFor={nav1}
          ref={(slider) => setNav2(slider || undefined)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {Images.map((item, index) => {
            return (
              <div key={index} className="hover:cursor-grab active:cursor-grabbing">
                <Image width={180} height={92} src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
