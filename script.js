audio = new Audio('audio/timernotice.mp3');

let wcsettings = document.getElementById("w-c-settings");
let wcnewapps = document.getElementById("w-c-newapps");
let wcfocus = document.getElementById("w-c-focus");
let windowcontainer = document.getElementById("w-c-container"); // Get the container element
let newapps = document.getElementById("newapps");
let windows = document.getElementById("window");
let flextools = document.getElementById("flex-tools");
let toolscontainer = document.getElementById("tools-container");
let newappslink = document.getElementById("newapps-link");
let newappsdecide = document.getElementById("newapps-decide");
let newappsfaviconlink = document.getElementById("newapps-favicon-link");
let newappsname = document.getElementById("newapps-name");
let focusmode = document.getElementById("focusmode");
let intervalon = document.getElementById("interval-on");
let intervaloff = document.getElementById("interval-off");
let addtimeinterval = document.getElementById("addtime-interval");
let intervaltimerdisplay = document.getElementById("interval-timer-display");

settings.addEventListener("click", open_settings);
function open_settings() {
    // Move the w-c-settings element to the window container
    windows.style.display = "block";
    windowcontainer.appendChild(wcsettings);
    wcsettings.style.display = "block";
}

flextools.addEventListener("click", toolsopen);
function toolsopen() {
    toolscontainer.style.display = "block"
}

newapps.addEventListener("click", open_customlink);
function open_customlink() {
    // Move the w-c-settings element to the window container
    windows.style.display = "block";
    windowcontainer.appendChild(wcnewapps);
    wcnewapps.style.display = "block";
}

focusmode.addEventListener("click", open_focus);
function open_focus() {
    // Move the w-c-settings element to the window container
    windows.style.display = "block";
    windowcontainer.appendChild(wcfocus);
    wcfocus.style.display = "block";
}

intervalon.addEventListener("click", interval_on);
function interval_on() {
    intervalon.disabled = true;
        intervaloff.disabled = false;
        intervaltimerdisplay.style.display = "block";
        addtimeinterval.style.display = "block";
}

intervaloff.addEventListener("click", interval_off);
function interval_off() {
    intervaloff.disabled = true;
        intervalon.disabled = false;
        intervaltimerdisplay.style.display = "none";
        addtimeinterval.style.display = "none";
}

newappsdecide.addEventListener("click", read_newappslink);
function read_newappslink() {
    console.log(newappslink.value);
    console.log("http://www.google.com/s2/favicons?domain=" + newappslink.value);
    newappsfaviconlink.src = "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + newappslink.value + "&size=64";
   
    fetch(newappslink.value)
    .then(response => {
      return response.text();
    })
    .then(body => {
       var m = body.match(/<title>(.*)<\/title>/);
      newappsname.innerHTML = m;
    });
}