'use client';
import Image from 'next/image';
interface Finding {
  img: JSX.Element;
  headingDiscription: string;
  textDiscription: string;
}

const Finding: Finding[] = [
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter1.svg"
        alt="Опытный педагог, учитель, преподаватель"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    headingDiscription: 'Опытных педагогов',
    textDiscription: 'Они помогут вашим детям раскрыть свой потенциал и талант',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter2.svg"
        alt="Индиыидуальный подход, волшебство"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    headingDiscription: 'Индивидуальный подход',
    textDiscription:
      'Поддержка, внимание и индивидуальный подход к каждому ребёнку - основополагающие ценности для наших педагогов.',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter3.svg"
        alt="Комфорт и знания. Человек работает в комфортном месте и получает знания."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    headingDiscription: 'Комфорт и знания',
    textDiscription: 'Наш центр оснащен современным оборудование и качественными учебными материалами для занятий.',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter4.svg"
        alt="Участе в соревнованиях. Пьедистал, кубок и медали."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    headingDiscription: 'Участие в соревнованиях',
    textDiscription:
      'Участие в различных соревнованиях, олимпиадах и конкурсах, а также экскурсиях расширят знания и кругозор ребёнка.',
  },
];

const WhatFindCenter = () => {
  return (
    <div>
      <div className="flex justify-center gap-[30px] md:pt-[60px] xs:pt-[30px] md:flex-row xs:flex-col">
        {Finding.slice(0, 2).map((item, index) => {
          return (
            <div key={index} className="flex md:gap-[30px] xs:gap-5 xs:items-center xs:w-[100%] md:w-auto">
              <div className="xs:w-[40%] md:w-auto">{item.img}</div>
              <div className="xs:w-[60%] md:w-auto md:max-w-[253px] md:h-auto xs:h-[146px] xs:max-w-[200px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen md:mt-[20px]">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-[30px] pt-[30px] md:flex-row xs:flex-col">
        {Finding.slice(2).map((item, index) => {
          return (
            <div
              key={index}
              className="flex md:flex-row-reverse xs:flex-row md:gap-[30px] xs:gap-5 xs:items-center xs:w-[100%] md:w-auto"
            >
              <div className="xs:w-[40%] md:w-auto">{item.img}</div>
              <div className="xs:w-[60%] md:w-auto md:max-w-[253px] md:h-auto xs:h-[146px] xs:max-w-[200px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen md:mt-[20px]">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatFindCenter;
