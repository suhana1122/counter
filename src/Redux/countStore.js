import { configureStore } from "@reduxjs/toolkit"
import counterSlice from './counterSlice'

const countStore=configureStore({

    reducer:{

        counterReducer:counterSlice

    }
})

export default countStore