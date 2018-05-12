'use strict'

//----------------------------------------< initial state >------------------------------------------
const messagseInitialState = {
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

export const createMessage = (title, message, user) => ({
    type: CREATE_MESSAGE,
    title,
    message,
    user
})

export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

//----------------------------------------< dispatch >------------------------------------------
export const postMessage = (title, message, user) =>
    dispatch => dispatch(createMessage(title, message, user))

export const postComment = (comment) =>
    dispatch => dispatch(createComment(comment))

//----------------------------------------< reducer >------------------------------------------
export default (state = messagseInitialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            state = Object.assign({}, state, {
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