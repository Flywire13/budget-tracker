import { useState } from "react"

import SummaryCards from "./components/SummaryCards"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  return (
    <main>
      <h1>Budget Tracker</h1>
      <SummaryCards transactions={transactions}/>
      <TransactionForm onAdd={addTransaction}/>
      <TransactionList transactions={transactions}/>
    </main>
  )
}

export default App