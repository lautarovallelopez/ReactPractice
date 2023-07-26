import React from 'react';

const greetingObject = {
    name: 'lautaro',
    greeting: 'bienvenido'
}
const greet = greeting => `${greeting.greeting} ${greeting.name}`;

const FirstApp = () => {
    return (
        <>
            <h2>{greet(greetingObject)}</h2>
            <h3>Valle López</h3>
        </>
    );
}

export default FirstApp;