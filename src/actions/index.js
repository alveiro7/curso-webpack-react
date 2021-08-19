export const setFavorite = payload => ({
    type: 'SET_FAVORITE', // snake case MAYUS
    payload
})

export const deleteFavorite = payload => ({
    type:'DELETE_FAVORITE',
    payload
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
})