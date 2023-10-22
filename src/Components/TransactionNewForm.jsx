import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const API = import.meta.env.VITE_BASE_URL;

function TransactionNewForm() {
  const [tranaction, setTransaction] = useState({
    id: uuidv4(),
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setTransaction({ ...tranaction, from: !transaction.from });
  };

  const addTransaction = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Transaction-type": "application/json",
      },
    };
    fetch(`${API}/transactions`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${transaction.name} has been added to your transactions!`);
        navigate(`/transactions`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Transaction Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          required
          placeholder="$$$"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="debit or credit "
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          placeholder="source of transaction "
          onChange={handleCheckboxChange}
          checked={transaction.from}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          onChange={handleTextChange}
          placeholder="Date of transaction."
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
