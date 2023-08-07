import { ADD_ITEM, CHANGE_VALUE } from "./constants";

const initState = {
  inputValue: "code shu",
  list: [],
};

export default (state = initState, action) => {
  if (action.type == ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type == CHANGE_VALUE) {
    console.log(action.data,111111);
    return {
      ...state,
      inputValue: action.data,
    };
  }

  return state;
};
