import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£');
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        dispatch ( 
            {
                type : 'CHG_CURRENCY',
                payload : event.target.value
            }
        );
    };

    return (
        <div>
            <select id="currency"  value={selectedCurrency} onChange={handleCurrencyChange} style={{
            backgroundColor: '#A4D6F8',
            color: '#35255B',
            padding: '10px',
            borderRadius: '20px',
            border: '1px solid black',
            fontSize: '16px',
            width: '120px'
        }}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;