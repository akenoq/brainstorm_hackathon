// ожидаем прогрузки  страницы до ее отображения
window.addEventListener("load", function () {
    document.querySelector("header").hidden = false;
    document.querySelector("#team-carousel").hidden = false;
    document.querySelector(".footer").hidden = false;
});