import { INCREMENT, DECREMENT, SET_COUNT } from "../Actions/CounterActions";

const initialState = {
    count: 0,
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {              // Action value ?
        case INCREMENT:               
            return {                    // return data to component -> (view)
                ...state,               // spread operator (…) for retun object
                count: state.count + 1, // payload
            };
        case DECREMENT:            
            return {
                ...state,
                count: state.count - 1, 
            };
        case SET_COUNT:            
            return {
                ...state,
                count: action.payload, 
            };
        default:
            return state;
    }
}

export default CounterReducer