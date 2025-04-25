import axios from "axios"
import { FETCH_ERRORE, FETCH_REQUEST, FETCH_SUCCESS, SEARCH_ERRORE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../../constraints/actionType"
import apiURL from "../../utils/apiUrl"


// action fetch type
const fetchListRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchListSuccess = (list:any) => {
    return {
        type: FETCH_SUCCESS,
        payload: list,
    }
}

const fetchListErrore = (error: any) => {
    return {
        type: FETCH_ERRORE,
        payload: error,
    }
}

// action fetch 
export const fetchListAction = () => {
    return async (dispatch: any) => {
        dispatch(fetchListRequest());
        try {
            const res = await axios.get(apiURL)
            dispatch(fetchListSuccess(res.data))
        } catch (error) {
            dispatch(fetchListErrore(error))
        }
    }
}

// Search list actio type
const searchListRequest = () => {
    return {
        type: SEARCH_REQUEST
    }
}

const searchListSuccess = (list:any) => {
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
            dispatch(searchListSuccess(res))
        } catch (error) {
            dispatch(searchListErrore(error))
        }
    }
}