var button = document.getElementById('lib-button');
var makeMadLib = function(event) {
      var myNoun = document.getElementById("noun").value;
      var myAdjective = document.getElementById("adjective").value;
      var myName = document.getElementById("person").value;
    alert("Hi " + myName + ", " + myNoun + " is great but " + myAdjective + " is better.");
};
button.addEventListener('click', makeMadLib);