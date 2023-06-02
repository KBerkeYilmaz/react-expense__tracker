import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    let filteredYear = props.year;

    if (filteredYear === 'All') {
    return                  <ul>
                                {props.items
                                .map((item) => 
                                <ExpenseItem
                                key={item.id} 
                                title={item.title} 
                                amount={item.amount} 
                                date={item.date}
                                />)}
                                {}
                            </ul>
    } else if (props.filteredItems.length > 0 && props.year !== 'All') {
    return                  <ul>
                                {props.filteredItems
                                .map((item) => 
                                <ExpenseItem
                                key={item.id} 
                                title={item.title} 
                                amount={item.amount} 
                                date={item.date}
                                />)}
                            </ul>
    } else if (props.filteredItems.length === 0) {
        return <h2 className='text-white 
                                text-4xl 
                                flex 
                                justify-center 
                                p-6'
                                >No data found.</h2>
    }
    
}

export default ExpenseList;