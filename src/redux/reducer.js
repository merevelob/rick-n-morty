import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET_FAV, SHOW_ALL } from "./actions";

const initialState = {
    myFavourites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(character => character.id !== Number(action.payload)),
                allCharacters: state.allCharacters.filter(character => character.id !== Number(action.payload))
            };
        case RESET_FAV:
            return {
                ...state,
                myFavourites: initialState.myFavourites,
                allCharacters: initialState.allCharacters
            };
        case FILTER:
            return {...state, myFavourites: state.allCharacters.filter(character => character.gender === action.payload)};
        case ORDER:
            return {
                ...state,
                myFavourites: state.allCharacters.toSorted((a, b) => {
                    return (action.payload === 'A') ? a.id - b.id
                    : b.id - a.id;
                })
            };
        case SHOW_ALL:
            return {...state, myFavourites: [...state.allCharacters]};
        default:
            return state;
    }
};

export default reducer;