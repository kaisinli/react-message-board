import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import '../public/styles.css';
import { Route, Router } from 'react-router-dom'
import Main from './components/presentational/Main'
import Routes from './routes'

// routes
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
)



