import { getHeroeByIdAsync } from '../../src/test-bases/09-promises';

describe('Pruebas en 09-promises', () => {
    test('getHeroeByIdAsync debe retornar un heroe', done => {
        const id = 1;

        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
            done();
        });
    });

    test('getHeroeByIdAsync debe retornar un error si heroe no existe', done => {
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            });
    });
});