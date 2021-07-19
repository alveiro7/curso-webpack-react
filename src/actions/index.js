export const setFavorite = payload => ({
    type: 'SET_FAVORITE', // snake case MAYUS
    payload
})

export const deleteFavorite = payload => ({
    type:'DELETE_FAVORITE',
    payload
})