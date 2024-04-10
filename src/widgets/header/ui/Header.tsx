import {Link} from "react-router-dom";
import Styles from './Header.module.css'
import {CartButton} from "../../../entities/cart";

export const Header = () => {
  return (
    <header className={Styles['header']}>
      <div className={`container ${Styles['header__container']}`}>
        <Link to='/'>
          <img className={Styles['logo']} src='/store/logo.svg' alt='Логотип'/>
        </Link>
        <nav className={Styles['nav']}>
          <ul className={Styles['nav__list']}>
            <li className={Styles['nav__link']}>
              <Link to='cart'>
                <CartButton/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}