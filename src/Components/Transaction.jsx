import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        {transaction.name ? (
          <span>💵💰</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={transaction.name} target="_blank" rel="noreferrer">
          {transaction.name}
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>💵</Link>
      </td>
    </tr>
  );
}

export default Transaction;
