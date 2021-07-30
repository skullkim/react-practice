import {startLoading, finishLoading} from "../modules/loading";

export default function createRequesThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({type});
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
            dispatch(finishLoading(type));
        }
        catch(err) {
            dispatch({
                type: FAILURE,
                payload: err,
                error: true
            });
            dispatch(startLoading(type));
            throw err;
        }
    };
}