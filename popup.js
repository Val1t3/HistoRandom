document.addEventListener('DOMContentLoaded', () => {
    var answerButton = document.getElementById('answer');
    var newButton = document.getElementById('new');

    answerButton.addEventListener('click', () => {
        alert("ANSWER !");
    }, false);

    newButton.addEventListener('click', () => {
        chrome.tabs.update(null, {url:"https://www.youtube.com"});
    }, false);
}, false);
