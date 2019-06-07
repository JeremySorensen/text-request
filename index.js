// JavaScript source code

function getFile() {

    console.log('INIT CALLED!');

    var main = document.getElementById('main');

    var myRequest = new Request(
        "https://cors.io/?https://raw.githubusercontent.com/JeremySorensen/text-request/master/text.txt",
        { mode: 'no-cors' });
    console.log(myRequest);
    fetch(myRequest).then(function (response) {
        return response.text().then(function (text) {
            console.log(text);
            main.innerHTML = text;
        });
    });
}

