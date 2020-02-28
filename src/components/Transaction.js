import React from 'react';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? 'minus' : 'plus';

    return (
        <li className={color}>
            {transaction.text} <span> {sign}Rp. {Math.abs(transaction.amount)}</span><button className="delete-btn"></button>
        </li>
    )
}