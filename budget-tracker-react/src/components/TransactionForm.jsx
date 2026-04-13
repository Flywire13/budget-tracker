function TransactionForm() {
  return (
    <>
    <h2>Add Transaction</h2>
        <form className="transaction_form">
            <input type="number" placeholder="Amount" />
            <input type="text" placeholder="Description" />
            <select name="category">
                <option value="food">Food</option>
                <option value="salary">Salary</option>
                <option value="rent">Rent</option>
                <option value="transport">Transport</option>
                <option value="other">Other</option>
            </select>
            <select name="type">
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    </>
  )
}

export default TransactionForm