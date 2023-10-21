import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: ,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then(response => response.json())
      .then(transaction => {
        setTransaction(transaction)
      })
      .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const updateTransaction = () => {

    const httpOptions = {
      "method": PUT,
      "body": JSON.stringify(transaction),
      "headers": {
        "Content-type" : "application/json"
      }
    }
    fetch(`${API}/transactions/${index}`, httpOptions)
      .then(() => {
        alert(`${tranaction.name} has been updated!`);
        navigate(`/transactions/${index}`)
      })
      .catch((err) => console.error(err))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          value={transaction.uuid()}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          name="item_name"
          placeholder="item name"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="savings, shopping, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="..."
          onChange={handleTextChange}
        />
        
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={bookmark.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;
