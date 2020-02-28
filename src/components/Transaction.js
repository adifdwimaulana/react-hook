import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? 'minus' : 'plus';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={color}>
            {transaction.text} <span> {sign}Rp. {Math.abs(transaction.amount).toLocaleString()}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}></button>
        </li>
    )
}