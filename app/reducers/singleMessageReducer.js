'use strict'

//----------------------------------------< initial state >------------------------------------------
const messagseInitialState = {
    id: 0,
    title: '',
    message: '',
    user: '',
    time: '',
    comments: []
}

//----------------------------------------< action >------------------------------------------
const CREATE_MESSAGE = 'CREATE_MESSAGE';
const CREATE_COMMENT = 'CREATE_COMMENT';

//----------------------------------------< action creator >------------------------------------------

export const createMessage = (title, message, user, time, id) => ({
    type: CREATE_MESSAGE,
    title,
    message,
    user, 
    time, 
    id
})

export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

//----------------------------------------< thunk creators >------------------------------------------
export const createNewMessage = (title, message, user, time, id) =>
    dispatch => dispatch(createMessage(title, message, user, time, id))

export const createNewComment = (comment) =>
    dispatch => dispatch(createComment(comment))

//----------------------------------------< reducer >------------------------------------------
export default (state = messagseInitialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            state = Object.assign({}, state, {
                id: action.id,
                title: action.title,
                message: action.message,
                user: action.user,
                time: action.time
            })
            return state;
        case CREATE_COMMENT:
            state = Object.assign({}, state);
            state.comments.push(action.comment)
            return state;
        default:
            return state;
    }
}