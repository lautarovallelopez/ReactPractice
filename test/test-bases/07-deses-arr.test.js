import { returnArray } from "../../src/test-bases/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('Debe retornar un string y un número', () => {
        const [letters, numbers] = returnArray();

        // espera que sean los mismos valores
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        // espera que sean del mismo tipo
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // espera que sea del mismo tipo
        expect(letters).toEqual(expect.any(String));
    });
});