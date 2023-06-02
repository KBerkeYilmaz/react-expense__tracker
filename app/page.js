'use client'

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Main from './components/UI/Main';
import { useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {
  let totalSum = 0
  DUMMY_EXPENSES.map((item) => {
    let amount=item.amount
    totalSum = amount + totalSum
  })  
  console.log(totalSum)


  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
        <Main className='
        bg-gray-700 
        flex 
        flex-col 
        justify-center 
        items-center 
        min-h-screen'>
        <NewExpense 
        onAddExpense = {addExpenseHandler} 
        />
        <Expenses 
        items = {expenses}
        />
        </Main>
  );
}

export default App;
