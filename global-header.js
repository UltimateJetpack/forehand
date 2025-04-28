/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<div id="global-preheader"><h1>Web Development</h1></div><div id="global-header"><ul id="nav-list"><li><a href="https://yacs-1.github.io/forehand/">Home</a></li><li><a href="/forehand/game-links/index.html"></a>Games(Not Done)</li><ul><li><a href="#">Personal Made</a></li><li><a href="#">In Website Games</a></li></ul><li><a href="/forehand/personal/index.html"></a>Personal</li><ul><li><a href="#">Profiles</a></li></ul><li><a href="/forehand/about_me/index.html">About Me</a></li><ul><li><a href="#">Favorites</a></li></ul><li><a href="https://github.com/yacs-1/forehand/blob/4df14e952c7936a41c452e6566a8d91196b88995/web-dev/index.html"></a>Web Development</a></li></ul></div>  ';

let_div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
