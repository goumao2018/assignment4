import React, { useState } from "react";
import Addtodos from "./AddTodo";
import Todo from "./Todo";
import styled from "styled-components";

const Title = styled.h1`
  color: gray;
  text-align: center;
`;

const App = () => {
  const [myTodoList, setMyTodoList] = useState([
    { todo: "Chewing the cud", due: "2019-03-04" },
    { todo: "Lying down in the stall", due: "2018-11-04" },
    { todo: "Socialising with other cows", due: "2018-10-04" }
  ]);

  const addTodo = todo => {
    let newTodoList = [todo, ...myTodoList];
    setMyTodoList(newTodoList);
  };

  return (
    <div>
      <div>
        <Title>Cow's Todo</Title>
        <Addtodos addTodo={addTodo} />
        <Todo myTodoList={myTodoList} />
      </div>
    </div>
  );
};

export default App;
