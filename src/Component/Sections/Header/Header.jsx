import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {ROUTES} from '../../../const'
import { SVG } from '../../SVG/SVG';
import img from '../../image/log22o.png';
export const Header = () => {
  const [show, setShow] = useState(null);
  
  const handleClick = (e) => {
    const id = e.target.id
    switch (id) {
      case 'one':
        setShow(1)
        break;
      case 'two':
        setShow(2)
        break;
      case 'three':
         setShow(3)
         break;
      default:
        return;
    }
  }

  return (
      <header>
        <nav>
          <ul>
            <li>
            <NavLink
            exact
            to={ROUTES.HOME}
          >
            Головна
          </NavLink>
              <button id='one' type="button" onClick={handleClick}><SVG id='arrow'/></button>
              {show === 1 && (<ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Nisi, voluptatum!</li>
              </ul>) }
            </li>
            <li>
            <NavLink
            to={ROUTES.CATALOG}
          >
            Каталог
          </NavLink>
              <button id='two' type="button" onClick={handleClick}><SVG id='arrow'/></button>
              {show === 2 && (<ul>
                <li>Lorem, ipsum.</li>
                <li>Sequi, id!</li>
              <li>Ad, temporibus.</li>
              </ul>) }
            </li>
            <li>
              <a href='/'>Услуги</a>
            <button id='three' type="button" onClick={handleClick}><SVG id='arrow'/></button>
              {show === 3 &&( <ul>
                
              <li>Сибирский чан</li>
                <li>Мангал на природе</li>
                <li>Прокат велосипедов</li>
                <li>Ресторан “Фрегат”</li>
              </ul>) }
            </li>
            <li>Отзывы </li>
            <li>Контакты</li>
          </ul>
      </nav>
      <img src={img} alt="logo" />
        <ul>
          <li>
            
            <a href="tel:83952560026"><SVG id='phoneCall'/> 8 (3952) 56-00-26</a>
          </li>
          <li>
            
            <a href="tel:83952560026"><SVG id='phoneCall'/>8 (3952) 56-00-26</a>
          </li>
        </ul>
        <ul>
          <li>
            <SVG id='viber'/>
          </li>
          <li>
          <SVG id='instagram'/>
          </li>
          <li>
          <SVG id='whatsapp'/>
          </li>
        </ul>
        <a href="/">заказать звонок</a>
      </header>
  );
};
