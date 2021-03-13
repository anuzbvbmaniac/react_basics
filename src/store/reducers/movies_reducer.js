import { MOVIE_DATA, MOVIES_LIST } from "../types";

const DEFAULT_DATA = {
    id: 999,
    username: 'anuzpandey123',
    user_type: 'premium'
}

export default function appReducer(state = DEFAULT_DATA, action) {
    switch (action.type) {
        case MOVIES_LIST:
            return { ...state, moviesLists: action.payload };
        case MOVIE_DATA:
            return { ...state, movieData: action.payload };
        default:
            return state;
    }
}
