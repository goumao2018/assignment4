import React, { useEffect } from "react";
import styled from "styled-components";
import "./trash_icon.png";

const Wrapper = styled.div`
  height: 100px;
  width: 300px;
  margin: auto;
  padding: 30px 20px 0 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #d5ffef;
`;

const DeleteWrapper = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 30px;
  float: right;
`;

const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

const trash = require("./trash_icon.png");

const Todos = props => {
  const todos = props.myTodoList;
  useEffect(() => {
    console.log("This will run after every time Todos render");
    return () => console.log("unmounting...");
  });

  return todos.map((todo, i) => {
    return (
      <Wrapper key={i}>
        <div>Todo: {todo.todo}</div>
        <div>Due: {todo.due}</div>
        <DeleteWrapper>
          <Icon alt="delete" src={trash} />
        </DeleteWrapper>
      </Wrapper>
    );
  });
};

export default Todos;
