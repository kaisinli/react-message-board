'use strict'

//----------------------------------------< initial state >------------------------------------------
const singlePostInitialState = {
    timestamp: '',
    'comments': []
}

//----------------------------------------< action >------------------------------------------
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

//----------------------------------------< action creator >---------------------------------------

export const addNewMComment = (user, comment) => ({
    type: ADD_NEW_COMMENT,
    user,
    message
})


//----------------------------------------< dispatch >------------------------------------------
export const postNewMessage = (newMessage) =>
    dispatch => dispatch(addNewMessage(newMessage))

export const getPost = (id) => 
    dispatch => dispatch(fetchPost(id))


//----------------------------------------< reducer >------------------------------------------
export default (state = messagseInitialState, action) => {
    switch (action.type) {
        // case FETCH_ALL_MESSAGES:
        //     return state;
        case ADD_NEW_MESSAGE:
            return Object.assign(
                {},
                state,
                { messages: state.messages.concat(action.message) }
            );
        case FETCH_POST:
            return state.messages[action.id]
        default:
            return state;
    }
}