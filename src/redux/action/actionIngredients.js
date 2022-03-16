import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/fiberaseConfig"
import { typesIngredient } from "../types/types"

export const listAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "ingredients"))
        const list = []
        data.forEach((doc) => {
            list.push({
                ...doc.data()
            })
        })
        dispatch(listSync(list))
    }
}

export const listSync = (list) => {
    return {
        type: typesIngredient.list,
        payload: list
    }
}