'use strict'

//----------------------------------------< initial state >------------------------------------------
const messagseInitialState = {
    'messages': []
}

//----------------------------------------< action >------------------------------------------
//const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';



//----------------------------------------< action creator >------------------------------------------

// export const fetchAllMessage = () => ({
//     type: FETCH_ALL_MESSAGES
// })

export const addNewMessage = (message) => ({
    type: ADD_NEW_MESSAGE,
    message
})

export const addNewComment = ({id, user, comment, cmtId}) => ({
    type: ADD_NEW_COMMENT,
    id,
    user,
    comment,
    cmtId
})

//----------------------------------------< dispatch >------------------------------------------
export const postNewMessage = (newMessage) =>
    dispatch => dispatch(addNewMessage(newMessage))

export const postNewComment = (newComment) =>
    dispatch => dispatch(addNewComment(newComment))


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
        case ADD_NEW_COMMENT:
            let newState = Object.assign({}, state);
            console.log('ACTION', action)
            newState.messages[action.id - 1].comments.push({ id: action.cmtId, user: action.user, comment: action.comment });
            return newState
        default:
            return state;
    }
}
