//Компонент принимает один проп onSubmit -
//функцию для передачи значения инпута
//при сабмите формы.
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    keyWord: "",
    page: 1,
  };

  handleChange = (e) => {
    this.setState({ keyWord: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.keyWord);
    //тут значение keyWord
    //тут вызов функции axios api c пропсом keyWord
    this.setState({ keyWord: this.state.keyWord });

    // this.reset();
  };

  reset = () => {
    this.setState({ keyWord: "", page: 1 });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
