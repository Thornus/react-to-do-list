import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';

export default class ToDoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreatingToDo: false
    }
  }

  createToDo = (title, description, date) => {
    this.setState({isCreatingToDo: false});
    this.props.addToDo(title, description, date);
  }

  render() {
    let toDoCardContent;
    const toDos = this.props.cardToDos;
    const toDoItems = [];
    let isCreatingToDo = this.state.isCreatingToDo;

    if(toDos.length) {
      for(let i = 0; i < toDos.length; i++) {
        toDoItems.push(<ToDoItem
          title={toDos[i].title}
          description={toDos[i].description}
          date={toDos[i].date}
          handleDelete={this.props.handleDelete}
          category={this.props.category}
          index={i}
          key={i.toString()}/>);
      }

      toDoCardContent = toDoItems;
    } else {
      isCreatingToDo = true;
    }

    return (
      <Card className='card'>
        <div className='card-content'>
          {toDoCardContent}
          {isCreatingToDo && <ToDoInput createToDo={this.createToDo}/>}
        </div>

        <CardActions>
          <Fab color="primary" aria-label="add" onClick={() => {this.setState({isCreatingToDo: true})}}>
            <AddIcon/>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

ToDoCard.propTypes = {
  cardToDos: PropTypes.array,
  createToDo: PropTypes.func
};

ToDoCard.defaultProps = {
  cardToDos: [],
  createToDo: () => {}
};