"use client";
import { Breadcrumbs, breadcrumbItems } from "@/components/Breadcrumbs";
import { DirectionsContent } from "@/components/directions/DirectionsContent";

import Book from "@/public/icons/book-24-px.svg";
import Hat from "@/public/icons/academic-cap-24-px.svg";
import Time from "@/public/icons/time-24-px.svg";
import Check from "@/public/icons/check-16-px.svg";

import { useColor } from "@/components/ColorNavigation";
import ModalWithDirection from "@/components/ModalWithDirection";
import { SliderCenterMode } from "@/components/sliders";
import { useWindowWidth } from "@/utils/hooks/useWindowWidth";

const Directions = ({ params }: { params: { directions: string } }) => {
  const width = useWindowWidth();
  const data = DirectionsContent.find((item) => item.id === params.directions);
  const color = useColor();

  return (
    <div className="overflow-x-hidden">
      <div className="font-gilroy font-normal text-gray-text   mx-auto mt-[107px]  xl:text-sexteen md:text-fourteen max-w-[1440px]">
        <div className="xl:mx-[60px] md:mx-[30px] xs:mx-[16px]">
          <section>
            <Breadcrumbs items={breadcrumbItems} />
          </section>
        </div>
      </div>
      <>
        {data ? (
          <>
            <div className="font-gilroy font-normal text-gray-text md:mt-[30px] mx-auto  xl:text-sexteen md:text-fourteen max-w-[1440px]">
              <div className="xl:mx-[60px] md:mx-[30px] xs:mx-4">
                <section className="flex    xl:h-[calc(100vh-257px)] ">
                  <div className="flex md:items-center md:flex-row xs:flex-col">
                    {width >= 768 ? (
                      ""
                    ) : (
                      <div>
                        <h1
                          className={`${color.activeColor} text-twentyfive font-gilroy`}
                        >
                          {data.block1.mainTitle}
                        </h1>
                        <p className="text-fourteen mt-[10px] mb-[35px]">
                          {data.block1.subTitle}
                        </p>
                      </div>
                    )}
                    <div
                      className={`${color.bgColor} md:w-[530px] md:h-[435px] xs:max-w-screen rounded-lg flex justify-center p-[20px] `}
                    >
                      <div className="flex ">{data.block1.mainImage}</div>
                    </div>

                    {width >= 768 ? (
                      ""
                    ) : (
                      <div className="flex flex-col justify-center mt-[35px] text-fourteen">
                        <p
                          className={`${color.activeColor} flex justify-center font-poppins`}
                        >
                          {data.block1.startClasses}
                        </p>

                        <div className="flex justify-between mt-[15px]">
                          <p>Продолжительность занятия</p>
                          <div className="flex">
                            <Time stroke={color.svgHover} />
                            <p className="ml-[10px]">
                              {data.block1.time} минут
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col font-poppins md:max-w-[593px] md:h-[435px] xs:max-w-screen content-between justify-between md:ml-[30px]">
                      {width >= 768 && (
                        <div>
                          <h1
                            className={`${color.activeColor} text-forty font-gilroy`}
                          >
                            {data.block1.mainTitle}
                          </h1>
                          <p className="text-fourteen mt-[10px]">
                            {data.block1.subTitle}
                          </p>
                        </div>
                      )}
                      <div className="md:mt-0 xs:mt-[35px]">
                        <div>
                          <div className="flex">
                            <Book stroke={color.svgHover} />
                            <h2 className={`${color.activeColor} ml-[10px]`}>
                              {data.block1.whatStudyTitle}
                            </h2>
                          </div>
                          <p className="text-fourteen mt-[10px]">
                            {data.block1.whatStudyParagraph}
                          </p>
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex">
                            <Hat stroke={color.svgHover} />
                            <h2 className={`${color.activeColor} ml-[10px]`}>
                              {data.block1.whatTeachTitle}
                            </h2>
                          </div>
                          <p className="text-fourteen mt-[10px]">
                            {data.block1.whatTeachParagraph}
                          </p>
                        </div>
                      </div>

                      {width >= 768 ? (
                        <div className="flex flex-row justify-between text-fourteen">
                          <div className="flex">
                            <p
                              className={`${color.activeColor} font-gilroy text-twenty`}
                            >
                              {data.block1.price} BYN
                            </p>
                            <p className=" ml-[18px]">
                              {data.block1.numberLessons}
                            </p>
                          </div>
                          <div className="flex">
                            <Time stroke={color.svgHover} />
                            <p className="ml-[10px]">
                              {data.block1.time} минут
                            </p>
                          </div>
                          <p>{data.block1.startClasses}</p>
                        </div>
                      ) : (
                        <p
                          className={`${color.activeColor} font-gilroy text-twentyfive mt-[35px] mb-[20px]`}
                        >
                          {data.block1.price} BYN
                        </p>
                      )}

                      <div className="flex md:flex-row xs:flex-col justify-between content-between items-center">
                        <div className="flex">
                          <ModalWithDirection
                            nameDirection={data.block1.mainTitle}
                          />
                        </div>
                        <p className="max-w-[285px] max-h-[40px] font-gilroy font-light text-fourteen flex xs:mt-[20px] md:mt-0">
                          {data.block1.discount}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="flex md:flex-row xs:flex-col justify-between items-center md:mt-[70px] xs:mt-[35px]">
                  <div className="flex font-poppins">
                    <div className="xl:max-w-[745px] md:h-[562px] md:max-w-[540px] ">
                      <div className="flex flex-col justify-between max-w-[745px]   xl:h-[247px] md:h-[260px] xs:h-[440px]">
                        <h2
                          className={`${color.activeColor} text-twentyfive font-gilroy`}
                        >
                          {data.block2.subBlock21.title}
                        </h2>
                        <p>{data.block2.subBlock21.paragraph1}</p>
                        <p>{data.block2.subBlock21.paragraph2}</p>
                      </div>

                      <div className="flex flex-col justify-between max-w-[745px]     xl:h-[245px] xl:mt-[70px] md:h-[260px] xs:h-[450px] md:mt-6 xs:mt-[35px]">
                        <h2
                          className={`${color.activeColor} font-gilroy text-twentyfive`}
                        >
                          {data.block2.subBlock22.mainTitle}
                        </h2>
                        <p className="mt-[6px]">
                          {data.block2.subBlock22.subMainTitle}
                        </p>
                        <div className="flex md:flex-row xs:flex-col">
                          <div>
                            <h3
                              className={`${color.activeColor} font-gilroy text-twenty`}
                            >
                              {data.block2.subBlock22.subTitle1}
                            </h3>
                            <p className="mt-[12px] text-fourteen">
                              {data.block2.subBlock22.paragraph1}
                            </p>
                          </div>
                          <div className="md:mt-0 xs:mt-[24px]">
                            <h3
                              className={`${color.activeColor} font-gilroy text-twenty`}
                            >
                              {data.block2.subBlock22.subTitle2}
                            </h3>
                            <p className="mt-[12px] text-fourteen">
                              {data.block2.subBlock22.paragraph2}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${color.bgColor} md:mt-0 xs:mt-[35px] md:p-9 xs:p-5 flex flex-col justify-between font-poppins text-fourteen rounded-2xl xl:max-w-[485px] xl:h-[476px] md:max-w-[372px] md:h-[580px] xs:h-[550px]`}
                  >
                    <h2
                      className={`${color.activeColor} font-gilroy text-twentyfive`}
                    >
                      {data.block2.subBlock23.title}
                    </h2>
                    {data.block2.subBlock23.paragraphs.map((item, index) => {
                      return (
                        <p key={index} className={`${color.textColor}`}>
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </section>

                <section className="flex md:flex-row xs:flex-col items-center justify-between font-poppins text-fourteen md:mt-[70px] xs:mt-[35px]">
                  <div className="flex flex-col justify-between md:h-[258px] md:max-w-[745px] xs:h-[388px]">
                    <h2
                      className={`${color.activeColor} font-gilroy text-twentyfive`}
                    >
                      {data.block3.subBlock31.title}
                    </h2>
                    <div className="md:max-w-[745px] md:h-[154px] xs:h-[262px] flex flex-wrap md:mt-0 xs:mt-[30px] ">
                      {data.block3.subBlock31.paragraphs.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex xl:w-[360px] md:[745px]"
                          >
                            <Check />
                            <p className="ml-2 ">{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className={`${color.bgColor} flex flex-col justify-between md:py-[26px]  rounded-2xl    xl:max-w-[485px] xl:h-[188px] xl:px-[63px] md:max-w-[372px] md:h-[256px] xs:h-[222px] md:px-9 xs:py-5 xs:px-5 md:mt-0 xs:mt-[35px]`}
                  >
                    <h3
                      className={`${color.activeColor} font-gilroy text-twentyfive`}
                    >
                      {data.block3.subBlock32.mainTitle}
                    </h3>
                    <p className={`${color.textColor}`}>
                      {data.block3.subBlock32.paragraph1}
                    </p>
                  </div>
                </section>

                <section className="md:pt-[90px] xs:mt-[35px]">
                  <h2
                    className={`${color.activeColor} font-gilroy text-twentyfive pb-[30px]`}
                  >
                    Вам также могут быть интересны
                  </h2>
                </section>
              </div>
            </div>
            <div className=" md:pb-[120px] xs:pb-[90px]">
              <SliderCenterMode />
            </div>
          </>
        ) : (
          <div>User not found</div>
        )}
      </>
    </div>
  );
};

export default Directions;
