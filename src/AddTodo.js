import React, { Component } from 'react';

class Addtodos extends Component {
    state ={
        todo: null,
        due: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);

    }

    
    render (){
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Things to do:</label>
                  <input type="text" id="todo" onChange={this.handleChange}/>
                  <label htmlFor="name">Due:</label>
                  <input type="text" id="due" onChange={this.handleChange}/>
                  <button>Add</button>
              </form>
          </div>
      )
  }
}

export default Addtodos;