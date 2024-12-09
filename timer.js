let focushou = document.getElementById("focus-hou");
let focusmin = document.getElementById("focus-min");
let focussec = document.getElementById("focus-sec");
let focus1hou = document.getElementById("focus-1hou");
let focus10min = document.getElementById("focus-10min");
let focus5min = document.getElementById("focus-5min");
let focus1min = document.getElementById("focus-1min");
let focus10sec = document.getElementById("focus-10sec");
let focus1sec = document.getElementById("focus-1sec");
let focus1houm = document.getElementById("focus-1hou-");
let focus10minm = document.getElementById("focus-10min-");
let focus5minm = document.getElementById("focus-5min-");
let focus1minm = document.getElementById("focus-1min-");
let focus10secm = document.getElementById("focus-10sec-");
let focus1secm = document.getElementById("focus-1sec-");
let intervalhou = document.getElementById("interval-hou");
let intervalmin = document.getElementById("interval-min");
let intervalsec = document.getElementById("interval-sec");
let interval1hou = document.getElementById("interval-1hou");
let interval10min = document.getElementById("interval-10min");
let interval5min = document.getElementById("interval-5min");
let interval1min = document.getElementById("interval-1min");
let interval10sec = document.getElementById("interval-10sec");
let interval1sec = document.getElementById("interval-1sec");
let interval1houm = document.getElementById("interval-1hou-");
let interval10minm = document.getElementById("interval-10min-");
let interval5minm = document.getElementById("interval-5min-");
let interval1minm = document.getElementById("interval-1min-");
let interval10secm = document.getElementById("interval-10sec-");
let interval1secm = document.getElementById("interval-1sec-");

focushouvalue = 0;
focusminvalue = 0;
focussecvalue = 0;

intervalhouvalue = 0;
intervalminvalue = 0;
intervalsecvalue = 0;

// HTML要素の取得
const focusHourInput = document.getElementById("focus-hou-range");
const focusMinuteInput = document.getElementById("focus-min-range");
const focusSecondInput = document.getElementById("focus-sec-range");

// 値変更時の処理
function updateFocusValue(type, value) {
    if (type === "hour") {
        focushouvalue = value;
        focushou.textContent = value;
    } else if (type === "minute") {
        focusminvalue = value;
        focusmin.textContent = value;
    } else if (type === "second") {
        focussecvalue = value;
        focussec.textContent = value;
    }
        if (focusminvalue > 49) {
            focus10min.disabled = true;
        }
        if (focusminvalue > 54) {
            focus5min.disabled = true;
        }
        if (focusminvalue > 58) {
            focus1min.disabled = true;
        }
        if (focusminvalue >= 10) {
            focus10minm.disabled = false;
        }
        if (focusminvalue >= 5) {
            focus5minm.disabled = false;
        }
        if (focusminvalue >= 1) {
            focus1minm.disabled = false;
        }
        if (focussecvalue > 49) {
            focus10sec.disabled = true;
        }
        if (focussecvalue > 58) {
            focus1sec.disabled = true;
        }
        if (focussecvalue >= 10) {
            focus10secm.disabled = false;
        }
        if (focussecvalue >= 1) {
            focus1secm.disabled = false;
        }
        if (intervalminvalue > 49) {
            interval10min.disabled = true;
        }
        if (intervalminvalue > 54) {
            interval5min.disabled = true;
        }
        if (intervalminvalue > 58) {
            interval1min.disabled = true;
        }
        if (intervalminvalue >= 10) {
            interval10minm.disabled = false;
        }
        if (intervalminvalue >= 5) {
            interval5minm.disabled = false;
        }
        if (intervalminvalue >= 1) {
            interval1minm.disabled = false;
        }
        if (intervalsecvalue > 49) {
            interval10sec.disabled = true;
        }
        if (intervalsecvalue > 58) {
            interval1sec.disabled = true;
        }
        if (intervalsecvalue >= 10) {
            interval10secm.disabled = false;
        }
        if (intervalsecvalue >= 1) {
            interval1secm.disabled = false;
        }

    if(focushouvalue == 0 && focusminvalue == 0 && focussecvalue == 0) {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
}

// イベントリスナーの設定
focusHourInput.addEventListener("input", (e) => updateFocusValue("hour", parseInt(e.target.value)));
focusMinuteInput.addEventListener("input", (e) => updateFocusValue("minute", parseInt(e.target.value)));
focusSecondInput.addEventListener("input", (e) => updateFocusValue("second", parseInt(e.target.value)));


start.addEventListener("click", focusstart);
function focusstart() {
    focus1sec.disabled = true;
    focus10sec.disabled = true;
    focus1min.disabled = true;
    focus5min.disabled = true;
    focus10min.disabled = true;
    focus1hou.disabled = true;
    interval1sec.disabled = true;
    interval10sec.disabled = true;
    interval1min.disabled = true;
    interval5min.disabled = true;
    interval10min.disabled = true;
    interval1hou.disabled = true;
    focus1secm.disabled = true;
    focus10secm.disabled = true;
    focus1minm.disabled = true;
    focus5minm.disabled = true;
    focus10minm.disabled = true;
    focus1houm.disabled = true;
    interval1secm.disabled = true;
    interval10secm.disabled = true;
    interval1minm.disabled = true;
    interval5minm.disabled = true;
    interval10minm.disabled = true;
    interval1houm.disabled = true;

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
    focus1sec.disabled = false;
    focus10sec.disabled = false;
    focus1min.disabled = false;
    focus5min.disabled = false;
    focus10min.disabled = false;
    focus1hou.disabled = false;
    interval1sec.disabled = false;
    interval10sec.disabled = false;
    interval1min.disabled = false;
    interval5min.disabled = false;
    interval10min.disabled = false;
    interval1hou.disabled = false;

        if (focusminvalue > 49) {
            focus10min.disabled = true;
        }
        if (focusminvalue > 54) {
            focus5min.disabled = true;
        }
        if (focusminvalue > 58) {
            focus1min.disabled = true;
        }
        if (focusminvalue >= 10) {
            focus10minm.disabled = false;
        }
        if (focusminvalue >= 5) {
            focus5minm.disabled = false;
        }
        if (focusminvalue >= 1) {
            focus1minm.disabled = false;
        }
        if (focussecvalue > 49) {
            focus10sec.disabled = true;
        }
        if (focussecvalue > 58) {
            focus1sec.disabled = true;
        }
        if (focussecvalue >= 10) {
            focus10secm.disabled = false;
        }
        if (focussecvalue >= 1) {
            focus1secm.disabled = false;
        }
        if (intervalminvalue > 49) {
            interval10min.disabled = true;
        }
        if (intervalminvalue > 54) {
            interval5min.disabled = true;
        }
        if (intervalminvalue > 58) {
            interval1min.disabled = true;
        }
        if (intervalminvalue >= 10) {
            interval10minm.disabled = false;
        }
        if (intervalminvalue >= 5) {
            interval5minm.disabled = false;
        }
        if (intervalminvalue >= 1) {
            interval1minm.disabled = false;
        }
        if (intervalsecvalue > 49) {
            interval10sec.disabled = true;
        }
        if (intervalsecvalue > 58) {
            interval1sec.disabled = true;
        }
        if (intervalsecvalue >= 10) {
            interval10secm.disabled = false;
        }
        if (intervalsecvalue >= 1) {
            interval1secm.disabled = false;
        }

    if(focushouvalue == 0 && focusminvalue == 0 && focussecvalue == 0) {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
    clearInterval(timerInterval);
    clearInterval(timerInterval2);
}

reset.addEventListener("click", focusreset);
function focusreset() {
        focus1sec.disabled = false;
        focus10sec.disabled = false;
        focus1min.disabled = false;
        focus5min.disabled = false;
        focus10min.disabled = false;
        focus1hou.disabled = false;
        interval1sec.disabled = false;
        interval10sec.disabled = false;
        interval1min.disabled = false;
        interval5min.disabled = false;
        interval10min.disabled = false;
        interval1hou.disabled = false;
        focus1secm.disabled = true;
        focus10secm.disabled = true;
        focus1minm.disabled = true;
        focus5minm.disabled = true;
        focus10minm.disabled = true;
        focus1houm.disabled = true;
        interval1secm.disabled = true;
        interval10secm.disabled = true;
        interval1minm.disabled = true;
        interval5minm.disabled = true;
        interval10minm.disabled = true;
        interval1houm.disabled = true;
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

focus1hou.addEventListener("click", add1hou);
function add1hou() {
    start.disabled = false;
    focus1houm.disabled = false;
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
        if (focusminvalue >= 10) {
            focus10minm.disabled = false;
        }
        if (focusminvalue >= 5) {
            focus5minm.disabled = false;
        }
        if (focusminvalue >= 1) {
            focus1minm.disabled = false;
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
        if (focusminvalue >= 10) {
            focus10minm.disabled = false;
        }
        if (focusminvalue >= 5) {
            focus5minm.disabled = false;
        }
        if (focusminvalue >= 1) {
            focus1minm.disabled = false;
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
        if (focusminvalue >= 10) {
            focus10minm.disabled = false;
        }
        if (focusminvalue >= 5) {
            focus5minm.disabled = false;
        }
        if (focusminvalue >= 1) {
            focus1minm.disabled = false;
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
        if (focussecvalue >= 10) {
            focus10secm.disabled = false;
        }
        if (focussecvalue >= 1) {
            focus1secm.disabled = false;
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
        if (focussecvalue >= 10) {
            focus10secm.disabled = false;
        }
        if (focussecvalue >= 1) {
            focus1secm.disabled = false;
        }
    focussec.innerHTML = focussecvalue;
}

focus1houm.addEventListener("click", minus1hou);
function minus1hou() {
    if (focushouvalue < 2) {
            focus1houm.disabled = true;
        }
    focushouvalue -= 1;
    focushou.innerHTML = focushouvalue;
}

focus10minm.addEventListener("click", minus10min);
function minus10min() {
    focusminvalue -= 10;
        if (focusminvalue < 50) {
            focus10min.disabled = false;
        }
        if (focusminvalue < 55) {
            focus5min.disabled = false;
        }
        if (focusminvalue < 60) {
            focus1min.disabled = false;
        }
        if (focusminvalue < 10) {
            focus10minm.disabled = true;
        }
        if (focusminvalue < 5) {
            focus5minm.disabled = true;
        }
        if (focusminvalue < 1) {
            focus1minm.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus5minm.addEventListener("click", minus5min);
function minus5min() {
    focusminvalue -= 5;
        if (focusminvalue < 50) {
            focus10min.disabled = false;
        }
        if (focusminvalue < 55) {
            focus5min.disabled = false;
        }
        if (focusminvalue < 60) {
            focus1min.disabled = false;
        }
        if (focusminvalue < 10) {
            focus10minm.disabled = true;
        }
        if (focusminvalue < 5) {
            focus5minm.disabled = true;
        }
        if (focusminvalue < 1) {
            focus1minm.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus1minm.addEventListener("click", minus1min);
function minus1min() {
    focusminvalue -= 1;
        if (focusminvalue < 50) {
            focus10min.disabled = false;
        }
        if (focusminvalue < 55) {
            focus5min.disabled = false;
        }
        if (focusminvalue < 60) {
            focus1min.disabled = false;
        }
        if (focusminvalue < 10) {
            focus10minm.disabled = true;
        }
        if (focusminvalue < 5) {
            focus5minm.disabled = true;
        }
        if (focusminvalue < 1) {
            focus1minm.disabled = true;
        }
    focusmin.innerHTML = focusminvalue;
}

focus10secm.addEventListener("click", minus10sec);
function minus10sec() {
    focussecvalue -= 10;
        if (focussecvalue < 50) {
            focus10sec.disabled = false;
        }
        if (focussecvalue < 60) {
            focus1sec.disabled = false;
        }
        if (focussecvalue < 10) {
            focus10secm.disabled = true;
        }
        if (focussecvalue < 1) {
            focus1secm.disabled = true;
        }
    focussec.innerHTML = focussecvalue;
}

focus1secm.addEventListener("click", minus1sec);
function minus1sec() {
    focussecvalue -= 1;
        if (focussecvalue < 50) {
            focus10sec.disabled = false;
        }
        if (focussecvalue < 60) {
            focus1sec.disabled = false;
        }
        if (focussecvalue < 10) {
            focus10secm.disabled = true;
        }
        if (focussecvalue < 1) {
            focus1secm.disabled = true;
        }
    focussec.innerHTML = focussecvalue;
}

interval1hou.addEventListener("click", add1hou_interval);
function add1hou_interval() {
    intervalhouvalue += 1;
    interval1houm.disabled = false;
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
        if (intervalminvalue >= 10) {
            interval10minm.disabled = false;
        }
        if (intervalminvalue >= 5) {
            interval5minm.disabled = false;
        }
        if (intervalminvalue >= 1) {
            interval1minm.disabled = false;
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

        if (intervalminvalue >= 10) {
            interval10minm.disabled = false;
        }
        if (intervalminvalue >= 5) {
            interval5minm.disabled = false;
        }
        if (intervalminvalue >= 1) {
            interval1minm.disabled = false;
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
        if (intervalminvalue >= 10) {
            interval10minm.disabled = false;
        }
        if (intervalminvalue >= 5) {
            interval5minm.disabled = false;
        }
        if (intervalminvalue >= 1) {
            interval1minm.disabled = false;
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
        if (intervalsecvalue >= 10) {
            interval10secm.disabled = false;
        }
        if (intervalsecvalue >= 1) {
            interval1secm.disabled = false;
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
        if (intervalsecvalue >= 10) {
            interval10secm.disabled = false;
        }
        if (intervalsecvalue >= 1) {
            interval1secm.disabled = false;
        }
    intervalsec.innerHTML = intervalsecvalue;
}

interval1houm.addEventListener("click", minus1hou_interval);
function minus1hou_interval() {
    if (intervalhouvalue < 2) {
            interval1houm.disabled = true;
        }
    intervalhouvalue -= 1;
    intervalhou.innerHTML = intervalhouvalue;
}

interval10minm.addEventListener("click", minus10min_interval);
function minus10min_interval() {
    intervalminvalue -= 10;
        if (intervalminvalue < 50) {
            interval10min.disabled = false;
        }
        if (intervalminvalue < 55) {
            interval5min.disabled = false;
        }
        if (intervalminvalue < 60) {
            interval1min.disabled = false;
        }
        if (intervalminvalue < 10) {
            interval10minm.disabled = true;
        }
        if (intervalminvalue < 5) {
            interval5minm.disabled = true;
        }
        if (intervalminvalue < 1) {
            interval1minm.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval5minm.addEventListener("click", minus5min_interval);
function minus5min_interval() {
    intervalminvalue -= 5;
        if (intervalminvalue < 50) {
            interval10min.disabled = false;
        }
        if (intervalminvalue < 55) {
            interval5min.disabled = false;
        }
        if (intervalminvalue < 60) {
            interval1min.disabled = false;
        }
        if (intervalminvalue < 10) {
            interval10minm.disabled = true;
        }
        if (intervalminvalue < 5) {
            interval5minm.disabled = true;
        }
        if (intervalminvalue < 1) {
            interval1minm.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval1minm.addEventListener("click", minus1min_interval);
function minus1min_interval() {
    intervalminvalue -= 1;
        if (intervalminvalue < 50) {
            interval10min.disabled = false;
        }
        if (intervalminvalue < 55) {
            interval5min.disabled = false;
        }
        if (intervalminvalue < 60) {
            interval1min.disabled = false;
        }
        if (intervalminvalue < 10) {
            interval10minm.disabled = true;
        }
        if (intervalminvalue < 5) {
            interval5minm.disabled = true;
        }
        if (intervalminvalue < 1) {
            interval1minm.disabled = true;
        }
    intervalmin.innerHTML = intervalminvalue;
}

interval10secm.addEventListener("click", minus10sec_interval);
function minus10sec_interval() {
    intervalsecvalue -= 10;
        if (intervalsecvalue < 50) {
            interval10sec.disabled = false;
        }
        if (intervalsecvalue < 60) {
            interval1sec.disabled = false;
        }
        if (intervalsecvalue < 10) {
            interval10secm.disabled = true;
        }
        if (intervalsecvalue < 1) {
            interval1secm.disabled = true;
        }
    intervalsec.innerHTML = intervalsecvalue;
}

interval1secm.addEventListener("click", minus1sec_interval);
function minus1sec_interval() {
    intervalsecvalue -= 1;
        if (intervalsecvalue < 50) {
            interval10sec.disabled = false;
        }
        if (intervalsecvalue < 60) {
            interval1sec.disabled = false;
        }
        if (intervalsecvalue < 10) {
            interval10secm.disabled = true;
        }
        if (intervalsecvalue < 1) {
            interval1secm.disabled = true;
        }
    intervalsec.innerHTML = intervalsecvalue;
}