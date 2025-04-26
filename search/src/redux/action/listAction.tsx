import axios from "axios"
import { FETCH_ERRORE, FETCH_REQUEST, FETCH_SUCCESS } from "../../constraints/actionType"
import apiURL from "../../utils/apiUrl"


// action fetch type
const fetchListRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchListSuccess = (list: any) => {
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
// export const fetchListAction = () => {
//     return async (dispatch: any) => {
//         dispatch(fetchListRequest());
//         try {
//             const res = await axios.get(apiURL)
//             dispatch(fetchListSuccess(res.data))
//         } catch (error) {
//             dispatch(fetchListErrore(error))
//         }
//     }
// }

export const fetchListAction = (page = 0, limit = 3) => {
    return async (dispatch: any) => {
        dispatch(fetchListRequest());
        try {
        const start = page * limit; // page 0 = 0, page 1 = 3, page 2 = 6...
        const res = await axios.get(`${apiURL}?_start=${start}&_limit=${limit}`);
        dispatch(fetchListSuccess(res.data));
        } catch (error) {
        dispatch(fetchListErrore(error));
        }
    };
};
