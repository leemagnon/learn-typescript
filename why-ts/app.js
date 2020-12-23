// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom (span 태그 정보)
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address 
 * @property {string} street
 * @property {string} city
 * @property {Address} address
 */ 

/**
 * @typedef {object} User 
 * @property {string} name 
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      //console.log(response);
      user = response.data;
      console.log(user.address);

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street; 
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
