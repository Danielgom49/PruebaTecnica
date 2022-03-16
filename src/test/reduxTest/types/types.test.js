import { types } from "../../../redux/types/types"

describe('verificar types', () => {
    test('comparar objeto types', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register',
        })
    })
})