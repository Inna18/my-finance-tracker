import React from 'react'
import styles from "../home/TransactionList.module.css";
import {useCollection} from "../../hooks/useCollection";
import {useFirestore} from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {

  const { removeDocument } = useFirestore("transactions");

  return (
    <div>
      {transactions.map(transaction => (
        <div  key={transaction.id} className={styles['transaction']}>
          <button className={styles['transaction-delete']} onClick={() => removeDocument(transaction.id)}>X</button>
          <div>
            <div className={styles['transaction-name']}>{ transaction.name }</div>
            <div className={styles['transaction-date']}>{ transaction.createdAt.toDate().toDateString() } { transaction.createdAt.toDate().toLocaleTimeString() }</div>
          </div>
          <div>
            <div className={styles['transaction-amount']}>₩{ transaction.amount }</div>
          </div>
        </div>
      ))}
    </div>
  )
}
