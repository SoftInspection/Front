export interface Transaction {
    id: number;
    type: 'deposit' | 'expense';
    amount: number;
    date: string;
    time: string;
    description: string;
  }
  
  // The function to get all transactions from localstorage.
  export const getTransactions = (): Transaction[] => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };
  
  // The function to add new transaction into localstorage.
  export const addTransaction = (transaction: Transaction): void => {
    const transactions = getTransactions();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  