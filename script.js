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
let focushou = document.getElementById("focus-hou");
let focusmin = document.getElementById("focus-min");
let focussec = document.getElementById("focus-sec");
let focus1hou = document.getElementById("focus-1hou");
let focus10min = document.getElementById("focus-10min");
let focus5min = document.getElementById("focus-5min");
let focus1min = document.getElementById("focus-1min");
let focus10sec = document.getElementById("focus-10sec");
let focus1sec = document.getElementById("focus-1sec");
let intervalhou = document.getElementById("interval-hou");
let intervalmin = document.getElementById("interval-min");
let intervalsec = document.getElementById("interval-sec");
let interval1hou = document.getElementById("interval-1hou");
let interval10min = document.getElementById("interval-10min");
let interval5min = document.getElementById("interval-5min");
let interval1min = document.getElementById("interval-1min");
let interval10sec = document.getElementById("interval-10sec");
let interval1sec = document.getElementById("interval-1sec");
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
        if (focusminvalue > 49) {
            focus10min.disabled = true;
        }
        if (focusminvalue > 54) {
            focus5min.disabled = true;
        }
        if (focusminvalue > 58) {
            focus1min.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus5min.addEventListener("click", add5min);
function add5min() {
    start.disabled = false;
    focusminvalue += 5;
        if (focusminvalue > 49) {
            focus10min.disabled = true;
        }
        if (focusminvalue > 54) {
            focus5min.disabled = true;
        }
        if (focusminvalue > 58) {
            focus1min.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus1min.addEventListener("click", add1min);
function add1min() {
    start.disabled = false;
        focusminvalue += 1;
        if (focusminvalue > 49) {
            focus10min.disabled = true;
        }
        if (focusminvalue > 54) {
            focus5min.disabled = true;
        }
        if (focusminvalue > 58) {
            focus1min.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus10sec.addEventListener("click", add10sec);
function add10sec() {
    start.disabled = false;
    focussecvalue += 10;
        if (focussecvalue > 49) {
            focus10sec.disabled = true;
        }
        if (focussecvalue > 58) {
            focus1sec.disabled = true;
        }
    focussec.innerHTML = focussecvalue;
}

focus1sec.addEventListener("click", add1sec);
function add1sec() {
    start.disabled = false;
    focussecvalue += 1;
        if (focussecvalue > 49) {
            focus10sec.disabled = true;
        }
        if (focussecvalue > 58) {
            focus1sec.disabled = true;
        }
    focussec.innerHTML = focussecvalue;
}

start.addEventListener("click", focusstart);
function focusstart() {
    start.disabled = true;
        focussavehou = focushouvalue;
        focussavemin = focusminvalue;
        focussavesec = focussecvalue;
        intervalsavehou = intervalhouvalue;
        intervalsavemin = intervalminvalue;
        intervalsavesec = intervalsecvalue;
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
        focus1sec.disabled = false;
        focus10sec.disabled = false;
        focus1min.disabled = false;
        focus5min.disabled = false;
        focus10min.disabled = false;
        interval1sec.disabled = false;
        interval10sec.disabled = false;
        interval1min.disabled = false;
        interval5min.disabled = false;
        interval10min.disabled = false;
    start.disabled = true;
    focushouvalue = 0;
    focusminvalue = 0;
    focussecvalue = 0;
    focushou.innerHTML = focushouvalue;
    focusmin.innerHTML = focusminvalue;
    focussec.innerHTML = focussecvalue;
        intervalhouvalue = 0;
    intervalminvalue = 0;
    intervalsecvalue = 0;
    intervalhou.innerHTML = intervalhouvalue;
    intervalmin.innerHTML = intervalminvalue;
    intervalsec.innerHTML = intervalsecvalue;
    clearInterval(timerInterval);
        clearInterval(timerInterval2);
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
        audio.currentTime = 0;
        audio.play();
        clearInterval(timerInterval);
    }

        if (focushouvalue == 0 && focusminvalue == 0 && focussecvalue == 0 && intervalon.disabled == true) {
                audio.currentTime = 0;
                audio.play();
                intervalhouvalue = intervalsavehou;
                intervalminvalue = intervalsavemin;
                intervalsecvalue = intervalsavesec;
                clearInterval(timerInterval);
                timerInterval2 = setInterval(countUp2, 1000);
        }
}

function countUp2() {
        intervalsecvalue--;

    if (intervalsecvalue < 0) {
        intervalminvalue--;
        intervalsecvalue = 59;
    }

    if (intervalminvalue < 0) {
        intervalhouvalue--;
        intervalminvalue = 59;
    }

    intervalhou.innerHTML = intervalhouvalue;
    intervalmin.innerHTML = intervalminvalue;
    intervalsec.innerHTML = intervalsecvalue;

    if (intervalhouvalue == 0 && intervalminvalue == 0 && intervalsecvalue == 0) {
                audio.currentTime = 0;
                audio.play();
                focushouvalue = focussavehou;
                focusminvalue = focussavemin;
                focussecvalue = focussavesec;
                clearInterval(timerInterval2);
                timerInterval = setInterval(countUp, 1000);
        }
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

intervalhouvalue = 0;
intervalminvalue = 0;
intervalsecvalue = 0;

interval1hou.addEventListener("click", add1hou_interval);
function add1hou_interval() {
    intervalhouvalue += 1;
    intervalhou.innerHTML = intervalhouvalue;
}

interval10min.addEventListener("click", add10min_interval);
function add10min_interval() {
    intervalminvalue += 10;
        if (intervalminvalue > 49) {
            interval10min.disabled = true;
        }
        if (intervalminvalue > 54) {
            interval5min.disabled = true;
        }
        if (intervalminvalue > 58) {
            interval1min.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval5min.addEventListener("click", add5min_interval);
function add5min_interval() {
    intervalminvalue += 5;
        if (intervalminvalue > 49) {
            interval10min.disabled = true;
        }
        if (intervalminvalue > 54) {
            interval5min.disabled = true;
        }
        if (intervalminvalue > 58) {
            interval1min.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval1min.addEventListener("click", add1min_interval);
function add1min_interval() {
    intervalminvalue += 1;
        if (intervalminvalue > 49) {
            interval10min.disabled = true;
        }
        if (intervalminvalue > 54) {
            interval5min.disabled = true;
        }
        if (intervalminvalue > 58) {
            interval1min.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval10sec.addEventListener("click", add10sec_interval);
function add10sec_interval() {
    intervalsecvalue += 10;
        if (intervalsecvalue > 49) {
            interval10sec.disabled = true;
        }
        if (intervalsecvalue > 58) {
            interval1sec.disabled = true;
        }
    intervalsec.innerHTML = intervalsecvalue;
}

interval1sec.addEventListener("click", add1sec_interval);
function add1sec_interval() {
    intervalsecvalue += 1;
        if (intervalsecvalue > 49) {
            interval10sec.disabled = true;
        }
        if (intervalsecvalue > 58) {
            interval1sec.disabled = true;
        }
    intervalsec.innerHTML = intervalsecvalue;
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