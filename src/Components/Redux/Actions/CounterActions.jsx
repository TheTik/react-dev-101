// Existing Action Types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_COUNT = 'SET_COUNT'

// Existing Action Creators (Dispatch -> Reducer)
export const increment = ()=> ({
    type: INCREMENT,
});

export const decrement = ()=> ({
    type: DECREMENT,
});

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count, // Test set data via payload
});