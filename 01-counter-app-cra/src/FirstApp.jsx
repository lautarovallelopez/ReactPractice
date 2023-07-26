import React from 'react';
import PropTypes from 'prop-types';

const greetingObject = {
    name: 'lautaro',
    greeting: 'bienvenido'
}
const greet = greeting => `${greeting.greeting} ${greeting.name}`;

const FirstApp = ({ title }) => {
    return (
        <>
            <h2>{greet(greetingObject)}</h2>
            <h3>Valle López</h3>
            <h4>{title}</h4>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    title: 'Este es un titulo por defecto'
}

export default FirstApp;