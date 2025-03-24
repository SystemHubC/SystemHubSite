sfunction goToHome() {
    document.getElementById('main-content').querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

function showFunctions() {
    document.getElementById('main-content').querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('functions').style.display = 'block';
}

function showSupportedPlaces() {
    document.getElementById('main-content').querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('supported-places').style.display = 'block';
}

function showSocials() {
    document.getElementById('main-content').querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('socials').style.display = 'block';
}

function showGoals() {
    document.getElementById('main-content').querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('goals').style.display = 'block';
}

function copyScript(scriptName) {
    // Логика копирования скрипта
    showPopup("Успешно", "Данный скрипт был успешно скопирован.");
}

function copyDiscordLink() {
    // Логика копирования ссылки Discord
    showPopup("Успешно", "Ссылка на Discord успешно скопирована.");
}

function copyEmailLink() {
    // Логика копирования email
    showPopup("Успешно", "Ссылка на почту успешно скопирована.");
}

function showPopup(title, message) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function tryNow() {
    // Логика для кнопки "Попробовать сейчас!"
}

function moreInfo() {
    // Логика для кнопки "Подробнее"
}
