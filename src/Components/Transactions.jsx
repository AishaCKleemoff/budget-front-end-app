import { useState, useEffect } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.log(error));
  }, []);

  const allTransArray = transactions.map((transaction) => {
    return Number(transaction.amount);
  });
  const totalAmount = allTransArray.reduce((prevAmount, currentAmount) => {
    return Number(prevAmount + currentAmount);
  }, 0);

  return (
    <>
      <h2>Total: ${totalAmount}</h2>
      <div className="Transactions">
        <section>
          <table>
            <thead className="transactions-thead">
              <tr>
                <th>Amount</th>
                <th>Transaction</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, arrayIndex) => {
                return (
                  <Transaction
                    key={index}
                    transaction={transaction}
                    index={arrayIndex}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Transactions;
