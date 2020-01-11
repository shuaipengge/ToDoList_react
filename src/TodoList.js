import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import "./style.css";

// Fragment 占位符 隐藏最外层标签
class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state 或者props发生改变的时候 render函数就会重新执行
    this.state = {
      inputValue: "",
      list: ["学习Vue", "学习React"]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    console.log("render");
    return (
      <Fragment>
        {/* 下面是组件内容 */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get('/api/todolist')
    .then(()=>{alert('succ')})
    .catch(()=>{alert('error')})
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {/* 父组件向子组件传值 属性方式 */}
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        </div>
      );
    });
  }

  handleInputChange() {
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何改变

    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
