import { listSync } from "../../redux/action/actionIngredients"
import { typesIngredient } from "../../redux/types/types"

describe('first', () => {
    // verificar list ingredientes
    test('verificar ingredientes', () => {
        const ingredients = {
            name: 'Risotto de setas (vegano)',
            cost: 7,
            ingredients: [
                {
                    brand: "Artua",
                    items: 1,
                    price: 2.95,
                    product: "Margarina de maíz",
                    quantity: "600 gr."
                }
            ]
        }
        const listIngredients = listSync(ingredients)

        expect(listIngredients).toEqual({
            type: typesIngredient.list,
            payload: {
                name: 'Risotto de setas (vegano)',
                cost: 7,
                ingredients: [
                    {
                        brand: "Artua",
                        items: 1,
                        price: 2.95,
                        product: "Margarina de maíz",
                        quantity: "600 gr."
                    }
                ]
            }
        })
    })
})