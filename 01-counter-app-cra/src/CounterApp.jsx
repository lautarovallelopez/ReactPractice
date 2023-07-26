import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const handleAdd = () => {
        value = value + 1;
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={handleAdd}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};


export default CounterApp;
