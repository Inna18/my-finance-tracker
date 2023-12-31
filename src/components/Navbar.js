import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import moneyIcon from "../assets/money-icon.svg"
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav>
      <div className={styles.navbar}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div className={styles['navbar-icon']} style={{marginRight:"4px"}}>
            <Link to="/">
              <img src={moneyIcon} alt="money-icon"/>
            </Link>
          </div>
          <h3 style={{color:"#fff"}}>MoneyApp</h3>
        </div>
        <div className={styles['navbar-links']}>
          {
            !user &&
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          }
          {
            user &&
            <>
              <p style={{display: "inline", color: "#fff", marginRight: "10px"}}>Hello, {user.displayName}</p>
              <button className={styles['logout-btn']} onClick={logout}>Logout</button>
            </>
          }
        </div>
      </div>
    </nav>
  )
}
