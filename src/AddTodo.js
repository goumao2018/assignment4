import React, { useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
`;

const Addtodos = props => {
  const [todo, setTodo] = useState({ todo: null, due: null });
// const todoVariables = useState({todo: null, due: null});
// const todo = todoVariables[0];
// const setTodo = todoVariables[1];

  const handleChange = e => {
    setTodo({
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(todo);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Todo:</label>
        <input type="text" id="todo" onChange={handleChange} />
        <label htmlFor="name">Due:</label>
        <input type="date" id="due" placeholder="dd/mm/yyyy" onChange={handleChange} />
        <button>Add</button>
      </form>
    </Container>
  );
};

export default Addtodos;
