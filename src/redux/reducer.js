import { ADD_FAV, REMOVE_FAV, RESET_FAV } from "./actions";

const initialState = {
    myFavourites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavourites: [...state.myFavourites, action.payload]};
        case REMOVE_FAV:
            return {...state, myFavourites: state.myFavourites.filter(character => character.id !== Number(action.payload))};
        case RESET_FAV:
            return {...state, myFavourites: initialState.myFavourites};
        default:
            return state;
    }
};

export default reducer;