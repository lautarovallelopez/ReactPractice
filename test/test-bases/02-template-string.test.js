import { getGreeting } from '../../src/test-bases/02-template-string';

describe('Prueba en 02-template-string', () => {
    test('getGreeting debe retornar "Hola Lautaro"', () => {
        const name = 'Lautaro';
        const message = getGreeting(name);

        expect(message).toBe(`Hola ${name}`);
    });
});