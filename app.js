//get date for clock
var myVar = setInterval(clock, 200);
function clock() {
var d = new Date();
var time = d.toLocaleTimeString();
document.getElementById("time").innerHTML = time;
}
//open Home app
function openHome() {
var app = "Home";
var appDescription = "<b>Home</b><br>The homepage for Avocado OS";
var appInfo = "Home<br>Version 1.0<br>©2021 Avocado";
var appCode = "App running: Home<br>Written in: HTML";
document.getElementById("appName").innerHTML = "Home";
// hide other apps
var x = document.getElementsByTagName("EMBED");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.zIndex = "-1";
}
}

//open app store
function openStore() {
var app = "App Store";
var appDescription = "<b>Home</b><br>The official app store for Avocado OS";
var appInfo = "App Store<br>Version 1.0<br>©2021 Avocado";
var appCode = "App running: App Store<br>Written in: HTML";
document.getElementById("appName").innerHTML = "App Store";
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
