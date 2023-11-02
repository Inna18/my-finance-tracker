import styles from "./Login.module.css";
import {useState} from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles['login-form']}>
      <p className={styles['login-title']}>Login</p>
      <div className={styles['login-input']}>
        <label>Email: </label>
        <input type="text"
               onChange={(e) => setEmail(e.target.value)}
               value={email}/>
      </div>
      <div className={styles['login-input']}>
        <label>Password: </label>
        <input type="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}/>
      </div>

      <div className={styles['btn-cnt']}>
        <button className={styles['login-btn']}>Submit</button>
      </div>
    </form>
  )
}
