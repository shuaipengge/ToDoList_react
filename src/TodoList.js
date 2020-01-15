import React from "react";
import { connect } from "react-redux";

// 无状态组件 函数
const TodoList = props => {
  const {
    inputValue,
    changeInputValue,
    handleClick,
    list,
    handleDelete
  } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
        <ul>
          {list.map((item, index) => {
            return (
              <li
                onClick={() => {
                  handleDelete(index);
                }}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// 链接的映射关系
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
// store.dispatch props
const mapDispatchToprops = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },

    handleDelete(index) {
      const action = {
        type: "delete_item",
        index
      };
      console.log(index);
      dispatch(action);
    }
  };
};
// Todolist 与 Store 做链接
// 与 数据 逻辑 结合 返回的内容就是容器组件了
export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
