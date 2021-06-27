//function to see which app is open from embedded pages
var appTimer = setInterval(findApp, 200);
function findApp() {
if (localStorage.getItem("openedApp") == "Home") {
openHome();
} else if (localStorage.getItem("openedApp") == "Store") {
openStore();
} else if (localStorage.getItem("openedApp") == "Browser") {
openBrowser();
}
}
