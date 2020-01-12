import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder="Todo info"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item>
              {item}
              <Button
                onClick={()=>{
                  this.props.handleItemDelete(index)
                }}
                type="danger"
                shape="circle"
                icon="delete"
                style={{ marginLeft: "10px" }}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI