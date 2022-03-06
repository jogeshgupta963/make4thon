window.onload = function () {
  var el = document.getElementById("sos-btn");
  el.onclick = async function () {
    var my_text = prompt("Enter message");
    // if (my_text) alert(my_text);
    // await axios.post('localhost:1337/sms/');
    fetch('localhost:1337/sms/')
      .then(res => res.json)
      .then(data => console.log(data))
  };
};
