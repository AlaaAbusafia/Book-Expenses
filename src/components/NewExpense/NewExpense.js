import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isAdding, isAddingSet] = useState(false);

    const enteredExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const isAddingHandler = () =>{
        isAddingSet(true);
    }

    const cancelHandler = () =>{
        isAddingSet(false);
    }

    return (
        <div className="new-expense">  
            {!isAdding && <button onClick={isAddingHandler}> Add New Expense </button>}
            {isAdding && <ExpenseForm onSaveExpenseData={enteredExpenseHandler} onCancel={cancelHandler} />}
        </div>
    )
}

export default NewExpense;
