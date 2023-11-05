import styles from "./Login.module.css";
import {useState} from "react";
import {useLogin} from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
        {!isPending && <button className={styles['login-btn']}>Submit</button>}
        {isPending && <button className={styles['login-btn']} disabled>Loading</button>}
      </div>

      {error && <p>{error}</p>}
    </form>
  )
}
