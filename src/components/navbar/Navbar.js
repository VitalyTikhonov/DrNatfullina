import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import getCN from 'classnames';
import styles from './Navbar.module.scss';

const Navbar = memo(function Navbar(props) {

  const loginStatus = false;

  return (
    <nav className={styles.navbar} >
      <ul className={styles.navList} >
        <NavLink
          exact to={'/'}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navItem, styles.navLink)}
        // onClick={props.toggleMobileMenuOpen}
        >
          Главная
      </NavLink>
        <NavLink
          exact to={'/'}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navItem, styles.navLink)}
        // onClick={props.toggleMobileMenuOpen}
        >
          Услуги
      </NavLink>
        <NavLink
          exact to={'/counter'}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navItem, styles.navLink)}
        // onClick={props.toggleMobileMenuOpen}
        >
          Блог
      </NavLink>
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className={getCN(styles.navItem, styles.navLink)}
            activeClassName={getCN(styles.navItem, styles.navLink)}
          // onClick={props.toggleMobileMenuOpen}
          >
            Личный кабинет
        </NavLink>}
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className={getCN(styles.navItem, styles.navLink)}
            activeClassName={getCN(styles.navItem, styles.navLink)}
          // onClick={props.toggleMobileMenuOpen}
          >
            Панель админа
        </NavLink>}
        <button
          type="button"
          className={styles.navItem}
        // onClick={handleAuthButtonClick}
        >
          {loginStatus === 'loggedIn' ? 'Выйти' : 'Войти'}
        </button>
      </ul>
    </nav>
  )
});

export default Navbar;
