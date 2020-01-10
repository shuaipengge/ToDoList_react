import React, { Component, Fragment } from "react";
// Fragment 占位符 隐藏最外层标签
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>学react</li>
          <li>学vue</li>
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    console.log(e.target.value);
  }
}

export default TodoList;
