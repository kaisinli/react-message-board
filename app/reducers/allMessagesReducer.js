'use strict'

//----------------------------------------< initial state >------------------------------------------
const messagseInitialState = {
    'messages': []
}

//----------------------------------------< action >------------------------------------------
const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

//----------------------------------------< action creator >------------------------------------------

export const fetchAllMessage = () => ({
    type: FETCH_ALL_MESSAGES
})

export const addNewMessage = (message) => ({
    type: ADD_NEW_MESSAGE,
    message
})

//----------------------------------------< dispatch >------------------------------------------
export const postNewMessage = (newMessage) =>
    dispatch => dispatch(addNewMessage(newMessage))

//----------------------------------------< reducer >------------------------------------------
export default (state = messagseInitialState, action) => {
    switch (action.type) {
        case FETCH_ALL_MESSAGES:
            return state;
        case ADD_NEW_MESSAGE:
            state = Object.assign({}, state);
            state.messages.push(action.message);
            return state;
        default:
            return state;
    }
}
