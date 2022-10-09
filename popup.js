document.addEventListener('DOMContentLoaded', () => {
    var answerButton = document.getElementById('answer');
    var newButton = document.getElementById('new');

    answerButton.addEventListener('click', () => {
        alert("ANSWER !");
    }, false);

    newButton.addEventListener('click', () => {
        alert("NEW !");
    }, false);
}, false);
