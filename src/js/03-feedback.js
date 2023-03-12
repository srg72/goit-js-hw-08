const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const FORM_KEY = 'feedback-form-state';
const localObj = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(textInput, 500));

function textInput(evt) {
  if (evt.target.type === 'email') {
    localObj.email = evt.target.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(localObj));
  } else if (evt.target.type === 'textarea') {
    localObj.message = evt.target.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(localObj));
  }
}

fillInput();

function fillInput() {
  try {
    inputEl.value = JSON.parse(localStorage.getItem(FORM_KEY)).email;
    textareaEl.value = JSON.parse(localStorage.getItem(FORM_KEY)).message;
  } catch (error) {
    inputEl.value = '';
    textareaEl.value = '';
  }
}

buttonEl.addEventListener('click', onclickSubmit);

function onclickSubmit(evt) {
  evt.preventDefault();
  console.log(localObj);
  localStorage.removeItem(FORM_KEY);
  formEl.reset();
}
