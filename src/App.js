import React, { useState, useEffect } from "react";
import Addtodos from "./AddTodo";
import Todo from "./Todo";
import styled from "styled-components";

const Title = styled.h1`
  color: gray;
  text-align: center;
`;

const App = () => {
  const todoList = [
    { todo: "Chewing the cud", due: "2019-03-04" },
    { todo: "Lying down in the stall", due: "2018-11-04" },
    { todo: "Socialising with other cows", due: "2018-10-04" }
  ];
  const [myTodoList, setMyTodoList] = useState(todoList);

  const addTodo = todo => {
    let newTodoList = [todo, ...todoList];
    setMyTodoList(newTodoList);
  };

  const deleteTodo = index => {
    console.log(index);
    const deletedTodoList = todoList.filter((item, i) => i !== index);
    console.log("heyyyy i am here!!!", deletedTodoList);
    setMyTodoList(deletedTodoList);
  };

  useEffect(() => {
    console.log("This will run after App render");
    return () => console.log("unmounting...");
  });
  return (
    <div>
      <div>
        <Title>Cow's Todo</Title>
        <Addtodos addTodo={addTodo} />
        <Todo myTodoList={myTodoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
