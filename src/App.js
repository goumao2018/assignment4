import React, { Component } from 'react';
import Addtodos from './AddTodo';
import Todo from './Todo';



class App extends Component {
  state ={
    list:[
      {todo: 'eating grass', due: '10/22/2018'},
      {todo: 'feed cattle', due: '10/22/2018'},
      {todo: 'feed cattle', due: '10/22/2018'}
    ]  
}

addTodo = (todo) => {
  let wow =[...this.state.list, todo];
  this.setState({
    list:wow
  })
}
  render() {
    return (
      <div>
        <div>
          Cowee's Todos
          <Todo list={this.state.list}/>
          <Addtodos addTodo = {this.addTodo}/>

        </div>
      </div>
    );
  }
}

export default App;
