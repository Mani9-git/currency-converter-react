import React, { Component } from 'react';

class CurrencyRow extends Component {
    state = {  }
    render() { 
        const {
            currencyOptions, 
            selectedCurrency,
            onChangeCurrency,
            onchangeAmount,
            amount
        } = this.props;
        
        return ( 
            <div>
                <input type="number" className ="input" name="currency" value={amount} onChange={onchangeAmount}/>
                <select name="country_currency" value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option=>(
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
 
export default CurrencyRow;