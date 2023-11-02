import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import moneyIcon from "../assets/money-icon.svg"

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  )
}
