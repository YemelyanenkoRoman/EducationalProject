import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import { AsNavFor } from '@/components/sliders/sliderSynking/SliderSynking';
import { getMetadata } from '@/utils';
import Image from 'next/image';

export const metadata = getMetadata({ title: 'О нас' });

const About = () => {
  return (
    <div className="font-poppins font-normal text-gray-text mt-[107px]    xl:text-sexteen md:text-fourteen">
      {/* Правильное позиционирование */}
      <div>
        <section className="max-w-[1440px] mx-auto">
          <div className="xl:mx-[60px] md:mx-[30px] xs:mx-[16px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        <section className="  flex flex-col justify-center   xl:h-[calc(100vh-197px)] xl:pb-[90px] md:pb-0">
          <div className="mx-[60px] xs:mx-[16px] md:items-center flex flex-col">
            <h1 className="flex font-gilroy text-blue-dark md:text-forty xs:text-thirtyfour">О нас</h1>
            <div className="md:max-w-[648px] md:h-[325px] md:mt-[60px] xs:mt-[40px] flex justify-between flex-col">
              <p>
                <span className="text-blue-dark">Образовательный центр ТехноКот</span> — это место, где дети открывают
                для себя новые возможности, интересы и учатся с удовольствием, развивают свой потенциал и творчество.
              </p>
              <p className="md:mt-0 xs:mt-6">
                В образовательном центре ТехноКот мы следуем принципам{' '}
                <span className="text-blue-dark">гуманной педагогики</span>, которая ставит в центр личность ребенка,
                его потребности, и деятельностный подход, который делает ученика активным участником образовательного
                процесса, а не пассивным слушателем.
              </p>
              <p className="md:mt-0 xs:mt-6">
                У нас есть широкий выбор предметов и направлений для развития разных способностей и навыков ребёнка.
              </p>
              <p className="md:mt-0 xs:mt-6">
                Наша команда состоит из профессиональных и вдохновленных преподавателей, которые любят свою работу и
                своих учеников.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Правильное позиционирование */}
      <div />
      <div className="max-w-[1440px] mx-auto">
        <section className=" md:mt-[90px] xs:mt-[50px] flex justify-center">
          <div className="xl:mx-[60px] md:mx-[30px] xs:mx-[16px]">
            <h1 className="md:flex md:justify-center font-gilroy md:text-forty xs:text-thirtyfour text-blue-dark">
              Наши принципы
            </h1>
            <h2 className="md:mt-[70px] xs:mt-[40px] font-gilroy text-twentyfive text-blue-dark">
              1. Гуманная педагогика
            </h2>
            <div className="flex md:flex-row xs:flex-col-reverse md:max-w-[1096px] md:max-h-[500px] md:mt-[40px] xs:mt-[30px]">
              <div className=" flex flex-col justify-between md:mr-6    xl:max-w-[424px] xl:h-[428px] md:max-w-[371px] md:h-[380px]">
                <p className="md:mt-0 xs:mt-6">
                  Мы видим <span className="text-blue-dark">в каждом ребенке уникальный потенциал</span> и уважаем его
                  индивидуальность. Все члены нашей команды ориентированы на интересы, способности и особенности каждого
                  ученика
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Мы <span className="text-blue-dark">формируем критическое мышление</span>, креативность и собственный
                  взгляд на мир, но также учим слышать других и ценить их мнения
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Для нас очень
                  <span className="text-blue-dark"> важна свобода ошибаться и учиться на своих ошибках.</span> Ошибки —
                  это естественная и неотъемлемая часть образовательного процесса, это точки роста
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Мы <span className="text-blue-dark">стремимся к гармонии между учебой и детством</span> , потому что
                  учёба — это не подготовка к будущей жизни и работе, это жизнь наших детей здесь и сейчас, и мы хотим,
                  чтобы они были счастливы каждый день
                </p>
              </div>
              {/* <HumanReady /> */}
              <div className="w-auto h-auto">
                <Image
                  src="/aboutPage/human-ready.png"
                  alt="Учитель, преподаватель по программированию, робототехнике, рисованию, подготовке к школе обьясняет детям, ученикам информацию."
                  width={648}
                  height={428}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="md:mt-[70px] xs:mt-[50px]  flex flex-col items-center   xl:mx-[60px] md:mx-[30px] xs:mx-4">
          <div className="md:max-w-[760px] md:h-[350px]">
            <h2 className="flex md:justify-center font-gilroy text-twentyfive text-blue-dark">2. Инновационность</h2>
            <div className="flex md:flex-row xs:flex-col mt-[40px]">
              <Image src="/aboutPage/innovations.png" alt="Современные учебные пособия." width={648} height={428} />
              <div className="md:max-w-[424px] md:h-[278px] flex flex-col justify-between md:ml-6">
                <p className="md:mt-0 xs:mt-6">
                  Мы используем <span className="text-blue-dark">современные образовательные технологи</span> и и
                  постоянно ищем, как повысить эффективность преподавания
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Наши <span className="text-blue-dark">преподаватели</span> регулярно{' '}
                  <span className="text-blue-dark">повышают свою квалификаци</span> ю, обмениваются опытом и работают в
                  системе образования
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Мы используем <span className="text-blue-dark">авторские образовательные программы</span> , которые
                  основаны на международном опыте, признанных педагогических подходах и научных исследованиях
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:mt-[70px] xs:mt-[50px] flex items-center   xl:mx-[60px] md:mx-[30px] xs:mx-4">
          <div className="md:max-w-[1096px] md:h-[536px] flex flex-col">
            <h2 className="flex font-gilroy text-twentyfive text-blue-dark "> 3. Ученик - активный деятель</h2>
            <div className="flex md:flex-row xs:flex-col-reverse mt-[40px]">
              <div className="flex flex-col justify-between md:mr-6    xl:max-w-[424px] xl:h-[464px] md:max-w-[371px] md:h-[425px]">
                <p className="md:mt-0 xs:mt-6">
                  Ученики получают новые знания и навыки благодаря личной активности, а не пассивному запоминанию
                  информации.
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Нельзя научиться плавать или ездить на велосипеде по учебнику, нужно пробовать, ошибаться, снова
                  пробовать и нарабатывать свой собственный опыт под руководством опытного преподавателя
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Вместо того, чтобы давать готовые решения, мы помогаем ребятам научиться учиться и использовать в
                  учебе свои сильные стороны и природный исследовательский интерес
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Ученики учатся осознанно ставить для себя учебные цели и планировать свой путь к ним
                </p>
                <p className="md:mt-0 xs:mt-6">
                  Учебная программа построена так, что ученик переходит от успеха к успеху, постоянно расширяя для себя
                  границы возможного
                </p>
              </div>
              <div className="flex">
                <div className="mr-6 w-auto h-auto">
                  <Image
                    src="/aboutPage/ActiveStudent1.png"
                    alt="Современные учебные пособия."
                    width={312}
                    height={464}
                  />
                </div>
                <div className="w-auto h-auto">
                  <Image
                    src="/aboutPage/ActiveStudent2.png"
                    alt="Современные учебные пособия."
                    width={312}
                    height={464}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:mt-[70px] xs:mt-[50px]  flex flex-col items-center   xl:mx-[60px] md:mx-[30px] xs:mx-4">
          <div className="md:max-w-[760px] md:h-[350px]">
            <h2 className="flex md:justify-center font-gilroy text-twentyfive  text-blue-dark">4. Сообщество</h2>

            <div className=" xs:mt-[40px] md:max-w-[424px] md:h-[278px]">
              <p>
                Образовательный процесс в образовательном центре ТехноКот строится на искреннем диалоге педагогов и
                учеников. Мы заботимся о дружелюбных и уважительных отношениях между учениками и всеми членами
                образовательного центра ТехноКот.
              </p>
              <p className="md:mt-0 xs:mt-6">
                Мы понимаем, что все наши ученики не могут, и не должны быть друг другу близкими друзьями, но в наших
                силах научить их вести уважительный диалог друг с другом, решать конфликтные ситуации без агрессии,
                уметь работать в команде и принимать друг друга такими, какие они есть.
              </p>
            </div>
          </div>
        </section>

        <section className="md:mt-[70px] xs:mt-[50px] flex flex-col items-center   xl:mx-[60px] md:mx-[30px] xs:mx-[16px]">
          <h3 className=" md:max-w-[424px] md:h-[72px] text-blue-dark">
            Мы — это дружная и сплоченная команда педагогов и организаторов, которые искренне любят свое дело
          </h3>
        </section>

        <section className="md:mt-[70px] xs:mt-[50px] md:mb-[110px] xs:mb-[70px] xl:mx-[60px] md:mx-[30px]">
          <div>
            <AsNavFor />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
