import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';


const CurrencySelector = () => {
    const {dispatch, currency} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    };

    return (
        <select className="custom-select btn btn-success" value={currency} onChange={handleCurrencyChange}>
            <option defaultValue value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    );
};


export default CurrencySelector;