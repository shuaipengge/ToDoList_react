import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

// Fragment 占位符 隐藏最外层标签
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习Vue", "学习React"]
    };
  }
  render() {
    return (
      <Fragment>
        {/* 下面是组件内容 */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                {/* 父组件向子组件传值 属性方式 */}
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    // console.log(e.target.value);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
    console.log(index);
  }
}

export default TodoList;
