describe('Pruebas demo component', () => {
    test('Mensaje 1 es igual a mensaje 2', () => {
        // 1. Inicialización
        const message1 = 'Hola mundo';
    
        // 2. Estímulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento esperado
        expect(message1).toBe(message2);
    });
});
