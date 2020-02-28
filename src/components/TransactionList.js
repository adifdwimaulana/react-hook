import React from 'react';

const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-Rp. 22.000</span><button className="delete-btn"></button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList;