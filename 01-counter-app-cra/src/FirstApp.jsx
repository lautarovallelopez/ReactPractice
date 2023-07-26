import React from 'react';

const greetingObject = {
    name: 'lautaro',
    greeting: 'bienvenido'
}
const greet = greeting => `${greeting.greeting} ${greeting.name}`;

const FirstApp = ({ title = 'Hola, soy un mensaje por defecto' }) => {
    return (
        <>
            <h2>{greet(greetingObject)}</h2>
            <h3>Valle López</h3>
            <h4>{title}</h4>
        </>
    );
}

export default FirstApp;