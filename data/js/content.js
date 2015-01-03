//check the site
var is_fabble = false;

if (location.href.search("fabble.cc") != -1) {
  is_fabble = true;
}

if(!is_fabble){
  var duration = 60 * 1000;
  setTimeout("returnToFabble()", duration);
}

function returnToFabble() {
  location.href = "http://fabble.cc/";
}
