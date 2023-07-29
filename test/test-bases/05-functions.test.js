import { getActiveUser, getUser } from "../../src/test-bases/05-functions";

describe('Pruebas en 05-functions', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'usuarioRamdom'
        };

        const user = getUser();

        expect(user).toEqual(testUser);
    });

    test('getActiveUser debe retornar un usuario', () => {
        const name = 'Lautaro';

        const user = getActiveUser(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    });
});
