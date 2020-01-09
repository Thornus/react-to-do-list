import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ToDoCard from './components/ToDoCard';
import CreateToDoButton from './components/CreateToDoButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: {},
      createToDoButtonInvisible: false
    }
  }

  addFirstToDo() {
    this.setState({
      createToDoButtonInvisible: true
    });
  }

  addToDo = (title, description, date) => {
    let toDos = this.state.toDos;

    const toDoObject = {
      title,
      description,
      date
    };

    toDos['uncategorized'] ? toDos['uncategorized'].push(toDoObject) : toDos['uncategorized'] = [toDoObject];

    this.setState({toDos});
  }

  handleDelete = (category, index) => {
    let toDos = this.state.toDos;
    toDos[category].splice(index, 1);;

    this.setState({toDos});
  }

  render() {
    const toDos = this.state.toDos;
    let mainClassName = 'main center-content full-height';
    let bodyContent;

    if(this.state.createToDoButtonInvisible) {
      bodyContent = [];

      for (let property in toDos) {
        if (toDos.hasOwnProperty(property)) {
          bodyContent.push(<ToDoCard
            cardToDos={toDos[property]}
            handleDelete={this.handleDelete}
            addToDo={this.addToDo}
            category={property}
            key={property}/>);
        }
      }

      if(!bodyContent.length) {
        bodyContent = <ToDoCard
                        handleDelete={this.props.deleteItem}
                        addToDo={this.addToDo}/>;
      }

      mainClassName = 'main';
    } else {
      bodyContent = <CreateToDoButton handleOnClick={() => this.addFirstToDo()}/>;
    }

    return (
      <div className="App">
        <NavBar/>
        <main className={mainClassName}>
          {bodyContent}
        </main>
      </div>
    );
  }
}

export default App;
