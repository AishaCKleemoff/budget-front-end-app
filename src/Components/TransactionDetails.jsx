import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => response.json())
      .then((transaction) => {
        console.log(transaction);
        setTransaction(transaction);
      })
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert("Your transaction has been deleted! ␡");
        navigate("/transactions");
      })
      .catch((err) => console.error(err));
  };
  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>🤑</span> : null} {transaction.name}
      </h3>
      <h5>
        <span>
          <a href={transaction.url}>{transaction.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {transaction.url}
      </h5>
      <h6>{transaction.category}</h6>
      <p>{}</p>
    </article>
  );
}
