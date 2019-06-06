// JavaScript source code
var main = document.getElementById('main');

var myRequest = new Request("https://github.com/JeremySorensen/text-request/blob/master/text.txt?raw=true");
console.log(myRequest);
fetch(myRequest).then(function (response) {
    return response.text().then(function (text) {
        console.log(text);
        main.innerHTML = text;
    });
});

