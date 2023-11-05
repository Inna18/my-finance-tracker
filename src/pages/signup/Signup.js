import styles from "./Signup.module.css";
import {useState} from "react";
import {useSignup} from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles['signup-form']}>
      <p className={styles['signup-title']}>Signup</p>
      <div className={styles['signup-input']}>
        <label>Email: </label>
        <input type="text"
               onChange={(e) => setEmail(e.target.value)}
               value={email}/>
      </div>
      <div className={styles['signup-input']}>
        <label>Password: </label>
        <input type="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}/>
      </div>
      <div className={styles['signup-input']}>
        <label>Display name: </label>
        <input type="text"
               onChange={(e) => setDisplayName(e.target.value)}
               value={displayName}/>
      </div>

      <div className={styles['btn-cnt']}>
        {isPending && <button className={styles['signup-btn']} disabled>Loading</button>}
        {!isPending && <button className={styles['signup-btn']}>Submit</button>}
      </div>

      {error && <p>{ error }</p>}
    </form>
  )
}
