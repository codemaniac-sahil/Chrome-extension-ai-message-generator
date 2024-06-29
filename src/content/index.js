import React from "react";
import ReactDOM from "react-dom";
import Modal from "../react/components/Modal.jsx";

const addAIButton = () => {
  const msgBox = document.querySelector(".msg-form__msg-content-container");
  if (msgBox) {
    const msgBoxImg = document.createElement("img");
    msgBoxImg.src =
      "https://icon-library.com/images/magic-icon-png/magic-icon-png-12.jpg";
    msgBoxImg.alt = "magic-icon";
    msgBoxImg.style.width = "30px";
    msgBoxImg.style.height = "30px";
    msgBoxImg.style.position = "absolute";
    msgBoxImg.style.bottom = "15px";
    msgBoxImg.style.right = "50px";
    msgBoxImg.style.marginBottom = "2px";
    msgBoxImg.style.marginRight = "2px";
    msgBoxImg.style.borderRadius = "40px";
    msgBoxImg.style.padding = "4px";
    msgBoxImg.style.backgroundColor = "white";
    msgBoxImg.style.cursor = "pointer";
    msgBox.appendChild(msgBoxImg);
    msgBoxImg.addEventListener("click", createModal);
  }
};

const removeMsgBoxImg = () => {
  const msgBoxImg = document.querySelector(
    ".msg-form__msg-content-container img"
  );

  if (msgBoxImg) {
    msgBoxImg.remove();
  }
};

document.addEventListener("focusin", addAIButton);
document.addEventListener("focusout", removeMsgBoxImg);

// Function to render the modal
function createModal() {
  const modalHeroContainer = document.createElement("div");
  modalHeroContainer.id = "modal-root";
  document.body.appendChild(modalHeroContainer);
  ReactDOM.render(
    <Modal onClose={() => modalHeroContainer.remove()} />,
    modalHeroContainer
  );
}
