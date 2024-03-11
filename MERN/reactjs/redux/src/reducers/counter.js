import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            count: 0,
            price: 0
        },
        reducers: {
            inc(currentState) {
                currentState.count = currentState.count + 1;
                currentState.price = currentState.count * 500;
            },
            desc(currentState) {
                currentState.count = currentState.count - 1;
                currentState.price = currentState.count * 500;
            }
        }
    }
)

export const { inc, desc } = CounterSlice.actions;
export default CounterSlice.reducer;