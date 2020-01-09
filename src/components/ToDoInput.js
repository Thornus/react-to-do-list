import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import CreateToDoButton from './CreateToDoButton';

export default class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.tomorrow = new Date().getDate() + 1;

    this.state = {
      title: '',
      description: '',
      date: ''
    }
  }

  handleChange = (e, id) => {
    let newState = {};
    newState[id] = e.target.value;

    this.setState(newState);
  }

  render() {
    return (
      <div class='todo-input'>
        <TextField
          id="title"
          label="Title"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={(e) => this.handleChange(e, 'title')}
          style={{marginBottom: 20}}
        />
        <TextField
          id="description"
          label="Description"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={(e) => this.handleChange(e, 'description')}
          style={{marginBottom: 20}}
        />
        <TextField
          id="date"
          label="Due Date"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.date}
          onChange={(e) => this.handleChange(e, 'date')}
          style={{marginBottom: 20}}
        />
        <CreateToDoButton handleOnClick={() => this.props.createToDo(this.state.title, this.state.description, this.state.date)}/>
      </div>
    );
  }
}

ToDoInput.propTypes = {
  handleKeyDown: PropTypes.func
};

ToDoInput.defaultProps = {
  handleKeyDown: () => {}
};