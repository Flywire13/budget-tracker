function SummaryCards({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)
  return (
    <div className="cards">
      <div className="card">
        <h2>Total Income</h2>
        <p>${totalIncome.toFixed(2)}</p>
        </div>
      <div className="card">
        <h2>Total Expenses</h2>
          <p>${totalExpenses.toFixed(2)}</p>
       </div>
    </div>
  )
}

export default SummaryCards