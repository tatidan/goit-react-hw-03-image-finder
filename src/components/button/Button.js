import React, { Component } from "react";

class Button extends Component {
  handleClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.fetchPhotos();
    }
  };

  render() {
    return (
      <button className="Button" type="button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

export default Button;
