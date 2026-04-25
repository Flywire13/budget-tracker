function TransactionList({ transactions }) {
  if (transactions.length == 0) { 
    return (
      <>
        <h2>Transactions</h2>
        <p>No transactions yet</p>
      </>
    )
  }

  return (
    <>
    <h2>Transactions</h2>
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>
          {t.description} - {t.category} - ${t.amount} ({t.type})
        </li>
      ))}
    </ul>
    </>
  )
}

export default TransactionList