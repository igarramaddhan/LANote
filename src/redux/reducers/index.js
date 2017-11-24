import { combineReducers } from 'redux'
import * as nav from './nav'
import * as note from './note'
export default combineReducers(Object.assign(nav, note))