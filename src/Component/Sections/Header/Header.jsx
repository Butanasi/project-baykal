import { NavLink } from 'react-router-dom';
import {ROUTES} from '../../../const'
import { SVG } from '../../SVG/SVG';
import img from '../../image/log22o.png';
import style from './Header.module.scss'
import { useLocation } from 'react-router-dom';

export const Header = () => {
const {pathname} = useLocation()
const styleHeader=()=>{
switch (pathname) {
  case '/':
    return style.Head
    case '/catalog':
      return style.HeadPageTwo
  default:
    return style.HeadPageTwo
}
}
  return (
    <header className={styleHeader()}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <NavLink exact to={ROUTES.HOME}  className={style.link}>
              <span>Головна</span>
              <span className={style.svg}><SVG id="arrow" />
              </span><ul className={style.listId}>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Nisi, voluptatum!</li>
            </ul>
            </NavLink> 
          </li>


          <li className={style.listItem}>
            <NavLink to={ROUTES.CATALOG} className={style.link}>
              <span>Каталог</span><span className={style.svg}><SVG id="arrow" /></span>
            <ul className={style.listId}>
                <li>Lorem, ipsum.</li>
              <li>Sequi, id!</li>
              <li>Ad, temporibus.</li>
              </ul>
            </NavLink>  
          </li>


          <li className={style.listItem}>
            <a href="/" className={style.link}>
              <span>Услуги</span>
              <span className={style.svg}><SVG id="arrow" /></span>
              <ul className={style.listId}>
              <li>Сибирский чан</li>
              <li>Мангал на природе</li>
              <li>Прокат велосипедов</li>
              <li>Ресторан “Фрегат”</li>
            </ul>
            </a>
          </li>

          <li className={style.listItem}>Отзывы </li>

          <li className={style.listItem}>Контакты</li>

        </ul>
      </nav>
      <img src={img} alt="logo" className={style.logo} />
      <ul className={style.list}>
        <li className={style.tel}>
          <SVG id="phoneCall"/>
          <a href="tel:83952560026" className={style.telLink}>
             8 (3952) 56-00-26
          </a>
        </li>
        <li className={style.tel}>
          <SVG id="phoneCall"/>
          <a href="tel:83952560026" className={style.telLink}>
            8 (3952) 56-00-26
          </a>
        </li>
      </ul>
      <ul className={style.list}>
        <li className={style.socialIcon}>
          <SVG id="viber" />
        </li>
        <li className={style.socialIcon}>
          <SVG id="instagram" />
        </li>
        <li className={style.socialIcon}>
          <SVG id="whatsapp" />
        </li>
      </ul>
      <a href="/" className={style.order}>заказать звонок</a>
    </header>
  );
};
