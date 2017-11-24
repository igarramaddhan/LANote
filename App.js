import React, { Component } from 'react'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './src/redux/reducers'
import AppContainer from './src/AppContainer'

const middlewares = [thunkMiddleware]
if (__DEV__) {
	const logger = createLogger()
	middlewares.push(logger)
}

function configureStores(initialState){
	const enhancer = compose(applyMiddleware(...middlewares))
	return createStore(reducer, initialState, enhancer)
}

const store = configureStores({})

export default () => (
	<Provider store={store}>
		<AppContainer/>
	</Provider>
)