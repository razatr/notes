
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev only
//@ts-ignore
window.store = store

export default store