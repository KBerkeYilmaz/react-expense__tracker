import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formVisibility,setFormVisibility] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setFormVisibility(false)

    }
    const startEditingHandler = event => setFormVisibility(true)
    const stopEditingHandler = event => setFormVisibility(false)

    return (
        <div className='new-expense'>
            {!formVisibility && <button onClick={startEditingHandler}>Add Expense</button>}
            {formVisibility 
            && 
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
            />} 
        </div>
    )
};

export default NewExpense;