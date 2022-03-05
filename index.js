window.onload = function () {
  var el = document.getElementById("sos-btn");
  el.onclick = function () {
    var my_text = prompt("Enter message`");
    if (my_text) alert(my_text);
  };
};
