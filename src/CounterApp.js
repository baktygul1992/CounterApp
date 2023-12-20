import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); // []
    

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = () => setCounter( counter - 1);
    
    const handleReset = () => setCounter( value );


    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="counter-value"> { counter } </h2>

            <button onClick={ handleAdd } data-testid="increment-btn">+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubtract } data-testid="decrement-btn">-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


