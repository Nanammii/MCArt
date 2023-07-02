const BASE_URL = 'https://firestore.googleapis.com/v1/projects/test-8d899/databases/(default)/documents/users';
const METHOD_POST = 'POST';
const ERROR_TEXT_SEND_DATA = 'Не удалось отправить форму. Попробуйте ещё раз';

const sendData = (body) =>
  fetch(`${BASE_URL}`, {
    method: METHOD_POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ERROR_TEXT_SEND_DATA);
    });

export {sendData};
