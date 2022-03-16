import { typesIngredient } from "../types/types";

const initialState = {
    ingredients: []
}

export const ingredientsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesIngredient.list:

            return {
                ingredients: [action.payload]
            };

        default:
            return state;
    }
} 