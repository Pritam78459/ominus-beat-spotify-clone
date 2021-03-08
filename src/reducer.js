export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token: 'BQAIluNQSnBIyjjo2zkPHz2HrlPza8g-RCSXbfsyv1638gU_tqOkTGPFLigQTnIS6tLNwwW9ALV4YF2krjGwCt3Q9fLX0DNeCXu0M6rUMve38UFkrL6NZ-l5yaOf8pTHWt62mjLSjktkT2JCaIkwpU3NCz-vhLlZC1jzo0bZQY97MPmw',

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
};

export default reducer;