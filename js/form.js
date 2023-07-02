import {sendData} from "./api.js";

const SUCCESS_MESSAGE = 'Форма успешно отправлена';

const formElement = document.querySelector('.registration__form');

const onButtonSubmit = () => {
  formElement.reset();
}

const sendFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const data = JSON.stringify(FormDataJson.toJson(formElement));

    sendData(data)
      .then(onSuccess)
      .then(() => {alert(SUCCESS_MESSAGE)})
      .catch((err) => {alert(err.message)})
  })
}

export {sendFormSubmit, onButtonSubmit};
