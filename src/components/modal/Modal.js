//При клике по элементу галереи должно открываться модальное окно с темным оверлеем
//и отображаться большая версия изображения.Модальное окно должно закрываться
//по нажатию клавиши ESC или по клику на оверлее.

//Внешний вид похож на функционал этого VanillaJS-плагина, только вместо
//белого модального окна рендерится изображение(в примере нажми Run).
//Анимацию делать не нужно!

import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("will unmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "escape") {
      console.log("ESC, close modal");
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    console.log("click onto backdrop");
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

// {/* {this.props.children} */}
