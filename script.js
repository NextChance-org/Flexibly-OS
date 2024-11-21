let wcsettings = document.getElementById("w-c-settings");
let windowcontainer = document.getElementById("w-c-settings-container"); // Get the container element
let windows = document.getElementById("window");

settings.addEventListener("click", open_settings);
function open_settings() {
    // Move the w-c-settings element to the window container
    windows.style.display = "block";
    windowcontainer.appendChild(wcsettings);
    wcsettings.style.display = "block";
}