import React, { useState} from "react";
import Addtodos from "./AddTodo";
import Todo from "./Todo";
import styled from "styled-components";


const Title = styled.h1`
  color: gray;
  text-align: center;
`;

const App =()=> {
  const [ myTodoList, setMyTodoList ] = useState ( [
    { todo: "Chewing the cud", due: "2019-03-04" },
    { todo: "lying down", due: "2018-11-04" },
    { todo: "Socialising with other cows", due: "2018-10-04" }
  ]
)
  

  const addTodo = todo => {
    let newTodoList = [todo, ...myTodoList];
    console.log(todo, "im a todo hoyhoy ----------")
    console.log(newTodoList, "im new todo list ----------")
    setMyTodoList({
      myTodoList: newTodoList
    });
  };

    return (
      <div>
        <div>
          <Title>Cow's Todo</Title>
          <Addtodos addTodo={addTodo} />
          <Todo myTodoList={myTodoList} myCommentList={myTodoList.comment} addComment={this.addComment}/>
        </div>
      </div>
    );
}

export default App;
