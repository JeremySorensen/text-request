// JavaScript source code
var main = document.getElementById('main');

var myRequest = new Request("https://jeremysorensen.github.io/text-request/text.txt");
console.log(myRequest);
fetch(myRequest).then(function (response) {
    return response.text().then(function (text) {
        console.log(text);
        main.innerHTML = text;
    });
});

