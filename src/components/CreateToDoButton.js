import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default class CreateToDoButton extends React.Component {
  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon/>}
        onClick={this.props.handleOnClick}
        className={this.props.className}
      >
        Create To Do
      </Button>
    );
  }
}