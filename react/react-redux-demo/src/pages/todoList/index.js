import { connect } from "react-redux";

function TodoList(props) {
  const { inputValue, inputChange, clickButton, list } = props;
  return (
    <>
      <input value={inputValue} onChange={inputChange} type="text" />
      <button onClick={clickButton}>添加</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
    },
    clickButton() {
      let action = {
        type: "add_item",
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
