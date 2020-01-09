import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }  
  }

  handleToggle(isChecked) {
    this.setState({checked: !isChecked})
  }

  render() {
    return (
      <div class='todo-item'>
        <Typography variant="h6" gutterBottom>
          {this.props.title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {this.props.description}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {this.props.date}
        </Typography>

        <Checkbox
          checked={this.state.checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': this.props.index }}
          onClick={() => this.handleToggle(this.state.checked)}
        />

        <DeleteIcon
          className='todo-item-delete-icon'
          onClick={() => this.props.handleDelete(this.props.category, this.props.index)}/>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};
