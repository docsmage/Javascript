var pageNode = document.getElementsByTagName('body')[0];

// pageNode.style.color = 'red'; this was just a test
pageNode.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById('nickname');
// var myNickname = nickname.innerHTML = ("Renee");
var myNickname = document.createTextNode("Renee");
nickname.appendChild(myNickname);

var favorites = document.getElementById('favorites');
var myFavorites = document.createTextNode("Robert");
favorites.appendChild(myFavorites);

var hometown = document.getElementById('hometown');
var myHometown = document.createTextNode("Brawley");
hometown.appendChild(myHometown);

var list = document.getElementsByTagName('li');
  for (var i = 0; i < list.length; i++) {
    var list_item = list[i]
    list_item.className = "listitem"
    list_item.style.color = "red"
  };

var list = document.querySelectorAll('list li');

var newImg = document.createElement('img');
newImg.src = "https://media.licdn.com/mpr/mpr/shrink_120_120/p/6/005/012/343/0faf182.jpg";
newImg.style.border = '1px solid black';
pageNode.appendChild(newImg);