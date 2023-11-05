import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import moneyIcon from "../assets/money-icon.svg"
import {useLogout} from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles['navbar-icon']}>
          <Link to="/">
            <img src={moneyIcon} alt="money-icon"/>
          </Link>
        </div>
        <div className={styles['navbar-links']}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <button className={styles['logout-btn']} onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  )
}
