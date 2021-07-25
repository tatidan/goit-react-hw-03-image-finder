//Компонент принимает один проп onSubmit - функцию для передачи значения инпута
//при сабмите формы.Создает DOM - элемент следующей структуры.
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    keyWord: "",
  };

  handleChange = (e) => {
    this.setState({ keyWord: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.keyWord);
    //тут значение keyWord

    this.reset();
  };

  reset = () => {
    this.setState({ keyWord: "" });
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
