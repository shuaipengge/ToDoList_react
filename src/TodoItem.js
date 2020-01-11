import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    // 组件创建后第一个要执行的方法
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content} = this.props;
  return <div onClick={this.handleClick}>{content}</div>;
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;
