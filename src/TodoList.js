import React, { Fragment } from "react";
// Fragment 占位符 隐藏最外层标签

function TodoList() {
  // JSX
  return (
    <Fragment>
      <div>
        <input></input>
        <button>提交</button>
      </div>
      <ul>
        <li>学react</li>
        <li>学vue</li>
      </ul>
    </Fragment>
  );
}

export default TodoList;
