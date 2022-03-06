// const { emitWarning } = require("process");

// window.onload = function () {
var el = document.getElementById("sos-btn");
// var el = document.querySelector('.glass-panel')
el.onclick = async function () {
  var my_text = prompt("Enter message");
  // if (my_text) alert(my_text);
  await axios.post('localhost:1337/sms/');
  // fetch('localhost:1337/sms/')
  //   .then(res => res.json)
  //   .then(data => console.log(data))
  console.log(my_text);
};
// };

console.log(el);

// el.addEventListener('click', (e) => {
//   // e.preventDefault();
//   // prompt("enter sos message");
//   console.group("msg");
// })