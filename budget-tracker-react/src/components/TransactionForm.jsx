import { useState } from "react"

function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("food")
  const [type, setType] = useState("income") 
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!amount || !description) return

    onAdd({
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      category,
      type
    })

    setAmount("")
    setDescription("")
    setCategory("food")
    setType("income")
  }
  return (
    <>
    <h2>Add Transaction</h2>
        <form className="transaction_form" onSubmit={handleSubmit}>
            <input
              type="number" 
              placeholder="Amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select 
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                <option value="food">Food</option>
                <option value="salary">Salary</option>
                <option value="rent">Rent</option>
                <option value="transport">Transport</option>
                <option value="other">Other</option>
            </select>
            <select 
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
                <option value="income">Income</option>
                <option value="expense">Expenses</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    </>
  )
}

export default TransactionForm