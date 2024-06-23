import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const MAX_BUDGET = 20000; // Valor máximo permitido

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value > MAX_BUDGET) 
        {
            alert(`Budget can't exceed ${currency}${MAX_BUDGET}`);
        }
        else if(value < totalExpenses)
        {
            alert(`Budget can't be lower than the spending`);
        }
        else 
        {
            setNewBudget(value);

            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;