import React, { Component } from 'react';

class Todos extends Component {
   render(){
       const todos = this.props.list;
       const todolist = todos.map((todo, i) => {
           return(
        <div key={i}>
           <div>Todo:  {todo.todo}</div>
           <div>Due:  {todo.due}</div>
        </div>
           )
       })
       return(
           <div>
               { todolist }
           </div>
       
       )
   }
    }

    export default Todos;