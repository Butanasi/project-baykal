import React from 'react';
import SvgSelector from '../../../Images/icons/SvgSelector';
import ImgSelector from '../../../Images/ImgSelector';

const SixReasons = () => {
  return (
    <>
      <div>
        <h1>6</h1>
        <p>Причин, почему для отдыха на Байкале нужно выбрать “Фрегат”</p>
      </div>
      <ul>
        <li>
          <ImgSelector id="img1" />
          <SvgSelector id="user" />
          <h3>Размещение до 70 человек</h3>
          <p>
            1 гостиничный комплекс с номерами категории “Стандарт” , JUNIOR SUIT
            и “Люкс”, а так же 4 отдельных коттеджа.
          </p>
        </li>
        <li>
          <ImgSelector id="img2" />
          <SvgSelector id="compass" />
          <h3>Территория более 6 гектар</h3>
          <p>
            Закрытая территория боле 6 Га, cвоя береговая линия, два
            оборудованных пляжа, cпуск для водной техники, вертолетная площадка.
          </p>
        </li>
        <li>
          <ImgSelector id="img3" />
          <SvgSelector id="restaurant" />
          <h3>Ресторанный комплекс</h3>
          <p>
            Ресторанный зал на 100 посадочных мест с панорамным видом на Байкал,
            закрытая веранда.
          </p>
        </li>
        <li>
          <ImgSelector id="img4" />
          <SvgSelector id="sun" />
          <h3>Отдых для всей семьи</h3>
          <p>
            Большая игровая зона, беседки с мангальной зоной, детская и
            спортивная площадка.
          </p>
        </li>
        <li>
          <ImgSelector id="img5" />
          <SvgSelector id="asset" />
          <h3>Малое море (Байкал)</h3>
          <p>
            Здесь редко идет дождь и бывает пасмурно. Это одно из немногих мест
            на планете, где практический все дни в году- солнечные.
          </p>
        </li>
        <li>
          <ImgSelector id="img6" />
          <SvgSelector id="umbrella" />
          <h3>Комплекс услуг</h3>
          <p>
            Наша база отдых предлагает множество услуг: сауна на берегу, банный
            чан, прокат велосипедов, конференц-зал до 50 человек и многое
            другое.
          </p>
        </li>
      </ul>
    </>
  );
};
export default SixReasons;
