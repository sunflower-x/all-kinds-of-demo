const defaultState = {
  inputValue: "thomas",
  list: [],
};

export default (state = defaultState, action) => {
  if (action.type == "change_input") {
    return {
      ...state,
      inputValue: action.value,
    };
  }
  if (action.type == "add_item") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  return state;
};
