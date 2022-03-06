
var el = document.getElementById("sos-btn");
el.onclick = async function () {
  var my_text = prompt("Enter message");

  let abcd = await axios.post('http://localhost:1337/sms/', { text: my_text });
  console.log(abcd);
};
