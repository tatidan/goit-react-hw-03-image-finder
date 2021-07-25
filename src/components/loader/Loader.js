import React, { Component} from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  state = {  }
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
};


//Компонент спинера, отображется пока идет загрузка изобаржений. 
//Используй любой готовый компонент, например react - loader - spinner или любой другой.


