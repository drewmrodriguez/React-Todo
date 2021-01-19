import React from 'react';
import Form from './components/TodoForm';
import List from './components/TodoList';

const todolist = [
  {
    task: 'Homework',
    id: 1234567890,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todolist : todolist,
    }
    this.onComplete = this.onComplete.bind(this);
  }

  newTask = {
    task:'',
    id: Date.now(),
    completed: false
  };

  onComplete = e => {
    this.setState({ todolist: this.state.todolist.map(item => {
      if(item.id === e) {
        return {...item, completed: !item.completed
        };
      }
      return item
    })
  });
  };

  onInputChange = e => this.newTask.task = e.target.value;

  onSubmit = e => {
    e.preventDefault();
    this.setState({ todolist: [...this.state.todolist, this.newTask] });
    this.newTask = {
      task:'',
      id: Date.now(),
      completed: false,
    }
    document.querySelector('#newtask').value='';
  }

  onClear = e => {
    e.preventDefault();
    this.setState({ todolist:this.state.todolist.filter(item => {
        return !item.completed
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <List state={this.state.todolist} onComplete={this.onComplete} />
        <Form 
          onClear={this.onClear} 
          newTask={this.newTask} 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
          />
      </div>
    );
  }
}

export default App;
