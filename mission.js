const themeSelector = document.querySelector("#theme-selector");
function changeTheme() {
    const selectedTheme = themeSelector.value;

    const body = document.querySelector('body');
    const logo = document.querySelector('#logo');

    if (selectedTheme === "dark") {
        body.classList.add("dark");
        logo.src = "mission/byui-logo_white.png";
    }
    else {
        body.classList.remove("dark");
        logo.src = "mission/byui-logo_blue.webp";
    }
}
themeSelector.addEventListener('change', changeTheme);