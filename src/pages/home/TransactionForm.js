import React, {useEffect, useState} from 'react'
import styles from "./TransactionForm.module.css"
import {useFirestore} from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount
    });
  }

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles['transaction-form']}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h4 className={styles['transaction-title']}>Add Transaction</h4>
      </div>
      <div className={styles['transaction-input']}>
        <label>Transaction name: </label>
        <input type="text"
               onChange={(e) => setName(e.target.value)}
               value={name} />
      </div>
      <div className={styles['transaction-input']}>
        <label>Amount(₩): </label>
        <input type="text"
               onChange={(e) => setAmount(e.target.value)}
               value={amount} />
      </div>

      <div className={styles['btn-cnt']}>
        <button className={styles['transaction-btn']}>Add Transaction</button>
      </div>
    </form>
  )
}
