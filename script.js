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
let focushou = document.getElementById("focus-hou");
let focusmin = document.getElementById("focus-min");
let focussec = document.getElementById("focus-sec");
let focus1hou = document.getElementById("focus-1hou");
let focus10min = document.getElementById("focus-10min");
let focus5min = document.getElementById("focus-5min");
let focus1min = document.getElementById("focus-1min");
let focus10sec = document.getElementById("focus-10sec");
let focus1sec = document.getElementById("focus-1sec");

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

focushouvalue = 0;
focusminvalue = 0;
focussecvalue = 0;

focus1hou.addEventListener("click", add1hou);
function add1hou() {
    start.disabled = false;
    focushouvalue += 1;
    focushou.innerHTML = focushouvalue;
}

focus10min.addEventListener("click", add10min);
function add10min() {
    start.disabled = false;
    focusminvalue += 10;
    focusmin.innerHTML = focusminvalue;
}

focus5min.addEventListener("click", add5min);
function add5min() {
    start.disabled = false;
    focusminvalue += 5;
    focusmin.innerHTML = focusminvalue;
}

focus1min.addEventListener("click", add1min);
function add1min() {
    start.disabled = false;
    focusminvalue += 1;
    focusmin.innerHTML = focusminvalue;
}

focus10sec.addEventListener("click", add10sec);
function add10sec() {
    start.disabled = false;
    focussecvalue += 10;
    focussec.innerHTML = focussecvalue;
}

focus1sec.addEventListener("click", add1sec);
function add1sec() {
    start.disabled = false;
    focussecvalue += 1;
    focussec.innerHTML = focussecvalue;
}

start.addEventListener("click", focusstart);
function focusstart() {
    start.disabled = true;
    timerInterval = setInterval(countUp, 1000);
}

stops.addEventListener("click", focusstop);
function focusstop() {
    if(focushouvalue == 0 && focusminvalue == 0 && focussecvalue == 0) {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
    clearInterval(timerInterval);
}

reset.addEventListener("click", focusreset);
function focusreset() {
    start.disabled = true;
    focushouvalue = 0;
    focusminvalue = 0;
    focussecvalue = 0;
    focushou.innerHTML = focushouvalue;
    focusmin.innerHTML = focusminvalue;
    focussec.innerHTML = focussecvalue;
    clearInterval(timerInterval);
}

function countUp() {
    focussecvalue--;

    if (focussecvalue < 0) {
        focusminvalue--;
        focussecvalue = 59;
    }

    if (focusminvalue < 0) {
        focushouvalue--;
        focusminvalue = 59;
    }

    focushou.innerHTML = focushouvalue;
    focusmin.innerHTML = focusminvalue;
    focussec.innerHTML = focussecvalue;

    if (focushouvalue == 0 && focusminvalue == 0 && focussecvalue == 0) {
        alert("終了しました");
        clearInterval(timerInterval);
    }
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