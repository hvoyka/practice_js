const template = document.querySelector('#template');
const content = template.content.querySelector(".user-wrapper");
const main = document.querySelector('.main');



fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => viewData(data))

function viewData(data) {
  data.forEach(element => {
    createUser(element);
  });
}
function createUser(userObj) {
  let newNode = content.cloneNode(true);
  newNode.querySelector('.user-name').textContent = userObj.name;
  newNode.querySelector('.user-mail').textContent = userObj.email;
  newNode.querySelector('.user-phone').textContent = userObj.phone;
  main.appendChild(newNode);
}