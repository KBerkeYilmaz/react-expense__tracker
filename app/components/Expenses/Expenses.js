import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';



const Expenses = (props) => {

    const items = props.items
    const [filteredYear, setFilteredYear] = useState('All')
    const filterYearHandler = (year) => {
        setFilteredYear(year);
    }
    const filteredItems = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    
   
    
    return (
            <Card className="expenses">
                <ExpensesFilter 
                selectedYear={filteredYear} 
                onYearChange = {filterYearHandler}
                />
                <ExpenseList 
                items={items} 
                filteredItems={filteredItems} 
                year={filteredYear}/>
            </Card>
    )
}

export default Expenses 



