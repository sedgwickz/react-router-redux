import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ACTION_TYPE from "./action_type";

const initialState = { value: 0, data: [] };

const counterReducer = async (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      return { value: state.value + 1 };
    case ACTION_TYPE.SUBTRACT:
      return { value: state.value - 1 };
    case ACTION_TYPE.LIST:
      if (!Array.isArray(action.payload)) return;
      //console.log("data: ", action.data)
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export let store = createStore(counterReducer, applyMiddleware(thunk));
