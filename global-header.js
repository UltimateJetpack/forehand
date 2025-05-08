/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<ul id="nav-list"><li><a href="https://yacs-1.github.io/forehand/">Home</a></li><li><a href="/forehand/game-links/index.html">Games(Not Done)</a><ul><li><a href="#">Personal Made</a></li><li><a href="#">In Website Games</a></li></ul></li><li><a href="/forehand/personal/index">Personal</a><ul><li><a href="#">Profiles</a></li></ul></li><li><a href="/forehand/about_me/index.html">About Me</a><ul><li><a href="#">Favorites</a></li></ul></li><li><a href="/forehand/web-dev/index.html"></a>Web Development</a></li></ul>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
