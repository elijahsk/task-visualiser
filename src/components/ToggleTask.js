import React from "react";
import EditTaskContainer from "../containers/EditTaskContainer.js";
import styled from "styled-components";

const StyledTask = styled.p`
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }`;

class ToggleTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const isEditing = this.state.isEditing;

    if (isEditing) {
      return (
        <EditTaskContainer task={this.props.task} index={this.props.index} />
      );
    } else {
      return (
        <StyledTask onClick={this.handleToggle}>
          {this.props.task}
        </StyledTask>
      );
    }
  }
}

export default ToggleTask;
