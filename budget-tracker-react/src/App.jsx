import SummaryCards from "./components/SummaryCards"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"

function App() {
  return (
    <main>
      <h1>Budget Tracker</h1>
      <SummaryCards />
      <TransactionForm />
      <TransactionList />
    </main>
  )
}

export default App