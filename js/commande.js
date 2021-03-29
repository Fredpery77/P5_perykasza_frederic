const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('orderId')

const section = document.querySelector('#commandId');

section.innerHTML = id;