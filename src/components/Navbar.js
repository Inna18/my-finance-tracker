import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import moneyIcon from "../assets/money-icon.svg"

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.icon}>
          <img src={moneyIcon} alt="money-icon"/>
        </div>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  )
}
