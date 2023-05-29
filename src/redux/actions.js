export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const RESET_FAV = 'RESET_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SHOW_ALL = 'SHOW_ALL';

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    };
};

export const resetFav = () => {
    return {
        type: RESET_FAV
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};

export const showAll = () => {
    return {
        type: SHOW_ALL
    };
};