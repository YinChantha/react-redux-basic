import axios from "axios"
import { SEARCH_ERRORE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../../constraints/actionType"
import apiURL from "../../utils/apiUrl"

// Search list actio type
const searchListRequest = () => {
    return {
        type: SEARCH_REQUEST
    }
}

const searchListSuccess = (list: any) => {
    return {
        type: SEARCH_SUCCESS,
        payload: list,
    }
}

const searchListErrore = (error: any) => {
    return {
        type: SEARCH_ERRORE,
        payload: error,
    }
}


// fetch sing list action
export const fetchSingleListAction = (name: any) => {
    return async (dispatch: any) => {
        dispatch(searchListRequest());
        try {
            const res = await axios.get(`${apiURL}?name=${name}`)
            dispatch(searchListSuccess(res.data[0]))
        } catch (error) {
            dispatch(searchListErrore(error))
        }
    }
}