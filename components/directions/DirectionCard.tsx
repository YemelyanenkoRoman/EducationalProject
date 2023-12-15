import ButtonSecondary from '../buttons/ButtonSecondary';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';

interface DirectionCardData {
  id: string;

  img: JSX.Element;
  title: string;
  age: number;
  duration: number;
  cost: number;
  quantity: string;
  bgColorImg: string;
  bgColorCard: string;
  colorText: string;

  buttonBorder: string;
  buttonBorderActive: string;
  buttonBorderHover: string;
}

export const DirectionCardData: DirectionCardData[] = [
  {
    id: 'programming',

    img: (
      <Image
        src="/DirectionCardImg/DirectionCard6.svg"
        alt="Ребёнок изучает программирование."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    bgColorImg: 'bg-[#724DA1]',
    bgColorCard: 'bg-fill-violet',
    colorText: 'text-hover-violet',

    buttonBorder: 'border-button-violet',
    buttonBorderActive: 'focus:border-button-violet',
    buttonBorderHover: 'hover:border-hover-violet',

    title: 'Программирование',
    age: 5,
    duration: 60,
    cost: 95,
    quantity: 'за 1 месяц',
  },
  {
    id: 'preparingforschool',

    img: (
      <Image
        src="/DirectionCardImg/DirectionCard1.svg"
        alt="Подготовка к школе."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    bgColorImg: 'bg-[#FFC3BA]',
    bgColorCard: 'bg-fill-pink',
    colorText: 'text-hover-brown',

    buttonBorder: 'border-button-brown',
    buttonBorderActive: 'focus:border-hover-brown',
    buttonBorderHover: 'hover:border-hover-brown',

    title: 'Подготовка к школе',
    age: 5,
    duration: 60,
    cost: 85,
    quantity: 'за 1 месяц',
  },
  {
    id: 'robotics',
    img: (
      <Image
        src="/DirectionCardImg/DirectionCard2.svg"
        alt="Робот думает и решает логическую задачу."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    bgColorImg: 'bg-[#E2F9FE]',
    bgColorCard: 'bg-fill-cyan',
    colorText: 'text-hover-cyan',

    buttonBorder: 'border-d-blue',
    buttonBorderActive: 'focus:border-fill-blue',
    buttonBorderHover: 'hover:border-hover-cyan',

    title: 'Робототехника',
    age: 5,
    duration: 60,
    cost: 85,
    quantity: 'за 1 месяц',
  },
  {
    id: 'mentalarithmetic',
    img: (
      <Image
        src="/DirectionCardImg/DirectionCard7.svg"
        alt="Ментальная арифметика."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    bgColorImg: 'bg-[#EAD46F]',
    bgColorCard: 'bg-fill-yelow',
    colorText: 'text-hover-yellow',

    buttonBorder: 'border-button-yellow',
    buttonBorderActive: 'focus:border-hover-yellow',
    buttonBorderHover: 'hover:border-hover-yellow',

    title: 'Ментальная арифметика',
    age: 5,
    duration: 60,
    cost: 75,
    quantity: 'за 1 месяц',
  },
  // {
  //   id: 'firstgradestudent',
  //   img: (
  //     <Image
  //       src="/DirectionCardImg/DirectionCard4.svg"
  //       alt="Ребёнок думает и придумывает разные идеи."
  //       width={0}
  //       height={0}
  //       sizes="100vw"
  //       className="w-full h-auto"
  //     />
  //   ),
  //   bgColorImg: 'bg-[#A4EAA0]',
  //   bgColorCard: 'bg-fill-green',
  //   colorText: 'text-hover-green',

  //   buttonBorder: 'border-button-green',
  //   buttonBorderActive: 'focus:border-hover-green',
  //   buttonBorderHover: 'hover:border-hover-green',

  //   title: 'Помощь первокласснику',
  //   age: 5,
  //   duration: 45,
  //   cost: 60,
  //   quantity: '1 месяц',
  // },

  {
    id: 'painting',
    img: (
      <Image
        src="/DirectionCardImg/DirectionCard5.svg"
        alt="Художник."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
      />
    ),
    bgColorImg: 'bg-[#4497AD]',
    bgColorCard: 'bg-fill-aqua',
    colorText: 'text-hover-aqua',

    buttonBorder: 'border-hover-aqua',
    buttonBorderActive: 'focus:border-button-aqua',
    buttonBorderHover: 'hover:border-button-aqua',

    title: 'Рисвание',
    age: 5,
    duration: 60,
    cost: 85,
    quantity: 'за 1 месяц',
  },
];

const DirectionCard = (props: DirectionCardData) => {
  return (
    <>
      <div
        key={props.id}
        className={`w-[312px] h-[434px] rounded-lg ${props.bgColorCard} ${props.colorText} flex flex-col p-[30px] hover:cursor-grab active:cursor-grabbing`}
      >
        <div className={`relative ${props.bgColorImg} w-[252px] h-[146px] rounded-lg`}>
          <div className=" flex justify-center">
            <div className="absolute bottom-0">{props.img}</div>
          </div>
        </div>
        <div className="max-w-[252px] max-h-[133px] pt-[15px] flex flex-col">
          <h4 key={uuidv4()} className="text-twenty">
            {props.title}
          </h4>
          <div className="flex flex-row justify-between text-fourteen pt-[25px]">
            <p>Возраст</p>
            <p key={uuidv4()}>от {props.age} лет</p>
          </div>
          <div className="flex flex-row justify-between text-fourteen">
            <p>Длительность</p>
            <p key={uuidv4()}>{props.duration} мин</p>
          </div>
          <div className="flex flex-row text-fourteen justify-between pt-[20px]">
            <p key={uuidv4()} className="text-twenty">
              {props.cost} BYN
            </p>
            <p key={uuidv4()}>{props.quantity}</p>
          </div>
          <div className="pt-[30px]">
            <Link href={`/directions/${props.id}`}>
              <ButtonSecondary
                type={'button'}
                width="251px"
                height="50px"
                title="Узнать подробнее"
                backgroundColor={props.buttonBorder}
                bgHover={props.buttonBorderHover}
                focus={props.buttonBorderActive}
                textColor={props.colorText}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionCard;
