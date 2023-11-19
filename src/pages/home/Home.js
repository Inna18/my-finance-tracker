import "./Home.module.css";
import styles from "../home/Home.module.css";
import TransactionForm from "./TransactionForm";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useCollection} from "../../hooks/useCollection";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
    );
  console.log(documents)

  return (
    <div className={styles.home}>
      <div className={styles['transaction-list']}>
        { documents && <TransactionList transactions={documents}/> }
        { error && <div>{ error }</div>}
      </div>
      <div className={styles['transaction-form']}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
