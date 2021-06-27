//get date for clock
var myVar = setInterval(clock, 200);
function clock() {
var d = new Date();
var time = d.toLocaleTimeString();
document.getElementById("time").innerHTML = time;
}

//variable section
var osLogo = "Avocado OS<br><img src='https://lb123658.github.io/os/img/logo.svg' style='width:280px;'><br>Version 1.0";
var appName = document.getElementById("appName");
var about = document.getElementById("about");
var info = document.getElementById("info");
var embed = document.getElementById("embed");

//app opening functions
function openHome() {
var appDescription = "<b>Home</b><br>The homepage for Avocado OS";
var appInfo = "Home<br>Version 1.0<br>©2021 Avocado";
var appCode = "App running: Home<br>Written in: HTML";
appName.innerHTML = "Home";
about.addEventListener("click", function() {
  notify(appInfo);
  });
appName.addEventListener("click", function() {
  notify(appDescription);
  });
info.addEventListener("click", function() {
  notify(appCode);
  });
embed.src = "https://lb123658.github.io/os/apps/home";
}
function openStore() {
var appDescription = "<b>App Store</b><br>The official app store for Avocado OS";
var appInfo = "App Store<br>Version 1.0<br>©2021 Avocado";
var appCode = "App running: App Store<br>Written in: HTML";
appName.innerHTML = "App Store";
about.addEventListener("click", function() {
  notify(appInfo);
  });
appName.addEventListener("click", function() {
  notify(appDescription);
  });
info.addEventListener("click", function() {
  notify(appCode);
  });
embed.src = "https://lb123658.github.io/os/apps/store";
}
function openBrowser() {
var appDescription = "<b>Browser</b><br>The browser for Avocado OS";
var appInfo = "Avocado Browser<br>Version 1.0<br>©2021 Avocado";
var appCode = "App running: Avocado Browser<br>Written in: HTML";
appName.innerHTML = "Browser";
about.addEventListener("click", function() {
  notify(appInfo);
  });
appName.addEventListener("click", function() {
  notify(appDescription);
  });
info.addEventListener("click", function() {
  notify(appCode);
  });
embed.src = "https://lb123658.github.io/os/apps/browser";
}

function loadMain() {
document.getElementById("load").style.visibility = "hidden";
document.getElementById("app").style.visibility = "visible";
}
function notify(phrase) {
document.getElementById("alertText").innerHTML = phrase;
document.getElementById("alertDiv").style.visibility = "visible";
}
function closeNotify() {
document.getElementById("alertDiv").style.visibility = "hidden";
}

var dropdown = document.getElementById("dropdown");
function show(element) {
element.style.visibility = "visible";
}
function hide(element) {
element.style.visibility = "hidden";
}

function openFullscreen() {
var elem = document.getElementById("app");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
}
