const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = 3001
const DATA_FILE = path.join(__dirname, "transactions.json")

app.use(cors())
app.use(express.json())

const readTransactions = () => {
    if (!fs.existsSync(DATA_FILE)) return []
    const data = fs.readFileSync(DATA_FILE, "utf-8")
    return JSON.parse(data)
}

const writeTransactions = (transactions) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(transactions, null, 2))
}

app.get("/transactions", (req, res) => {
    const transactions = readTransactions()
    res.json(transactions)
})

app.post("/transactions", (req, res) => {
    const transactions = readTransactions()
    const newTransaction = {
        id: Date.now(),
        ...req.body
    }
    transactions.push(newTransaction)
    writeTransactions(transactions)
    res.status(201).json(newTransaction)
})

app.delete("/transactions/:id", (req, res) => {
    const transactions = readTransactions()
    const filtered = transactions.filter(
        (t) => t.id !== parseInt(req.params.id)
    )
    writeTransactions(filtered)
    res.status(200).json({ message : "Deleted"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})