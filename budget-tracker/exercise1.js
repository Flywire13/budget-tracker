const transactions = [
    { amount: 50, category: "Food", type: "expense" },
    { amount: 30, category: "Food", type: "expense" },
    { amount: 200, category: "Salary", type: "income" },
    { amount: 80, category: "Rent", type: "expense" },
    { amount: 20, category: "Food", type: "expense" },
  ];
  
  const summarizeByCategory = (transactions) => {
    const result = transactions.reduce((summary, t) => {
      summary[t.category] = (summary[t.category] || 0) + t.amount;
      return summary
    }, {});
    return result;
  };
  
  console.log(summarizeByCategory(transactions));
  // should print: { Food: 100, Salary: 200, Rent: 80 }