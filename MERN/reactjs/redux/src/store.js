import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/counter";


const store = configureStore(
    {
        reducer: {
            counter: CounterReducer
        }
    }
)

export default store;