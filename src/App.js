import React from "react";
import "./App.css";
import List from "./List";
import Input from "./Input";

class App extends React.Component {
  state = {
    tasks: ["make coffee", "make notes", "go for a job", "new task"],
    currInput: "",
  };

  handleCurrentInput = (value) => {
    this.setState({ currInput: value });

  }

  handleTasks = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.currInput],
      currInput: "",
    });
  }

  deleteTask = (singleTask) => {
    let currentTaskArr = this.state.tasks;

    let filteredArr = currentTaskArr.filter((element) => {
      return element !== singleTask;

    })

    this.setState({ tasks: filteredArr });
  }

  render = () => {
    return (
      <div>

        <Input
          handleCurrentInput={this.handleCurrentInput}
          handleTasks = {this.handleTasks} 
          currInput = {this.currInput} 

        />

        <List
          tasks={this.state.tasks} deleteTask={this.deleteTask}
        />

      </div>
    );
  };
}



export default App;
