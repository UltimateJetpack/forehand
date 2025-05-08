/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Jaxon\'s Personal Website</h1></div><div id="global-header"><ul id="nav-list"><li><a href="https://yacs-1.github.io/forehand/">Home</a></li><li><a href="/forehand/game-links/index.html">Games(Not Done)</a><ul><li><a href="#">Personal Made</a></li><li><a href="#">In Website Games</a></li></ul></li><li><a href="/forehand/personal/index">Personal</a><ul><li><a href="#">Profiles</a></li></ul></li><li><a href="/forehand/about_me/index.html">About Me</a><ul><li><a href="#">Favorites</a></li></ul></li><li><a href="/forehand/web-dev/index.html">Web Development</a><ul><li><a href="/forehand/wdsub/week1.html">Week 1</a></li><li><a href="/forehand/wdsub/recipe.html">Week 2</a></li><li><a href="/forehand/wdsub/anchors.html">Week 3</a></li><li><a href="/forehand/wdsub/poem.html">Week 4</a></li><li><a href="/forehand/wdsub/reviews.html">Week 5</a></li><li><a href="/forehand/wdsub/journal.html">Week 6</a></li><li><a href="/forehand/wdsub/band-page.html">Week 7</a></li><li><a href="/forehand/wdsub/jslist.html">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li></ul></div>';

_div.innerHTML = INJECTION;
