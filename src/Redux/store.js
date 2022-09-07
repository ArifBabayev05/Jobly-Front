import {configureStore, combineReducers} from '@reduxjs/toolkit'
import AuthReducer from './Slice/AuthSlice'

const rootReducer = combineReducers(
    {
        auth : AuthReducer,
    
    }
)

const store = configureStore({
    reducer: rootReducer,

})

export default store