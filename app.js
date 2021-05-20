var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate);
btnTranslate.addEventListener('click', addEventListener)
var textInput = document.querySelector("#txt-input");


var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json?";

function getTranslateUrl(input) {
    return serverUrl + "text= " + input;
}

function addEventListener() {


    console.log('clicked');
    console.log('input', textInput.value);
    //take input
    var inputText = textInput.value;
    //fetch info process
    fetch(getTranslateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText; //output
        })
        .catch(errorHandler);

    // outputDiv.innerText = "blahblah " + textInput.value;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("their is some issue in server please try again later........");
}

// function url(text) { return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text= " + text }
// var url0 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am meet ved";
// fetch(url0)
//     .then(response => response.json())
//     .then(json => console.log(json))
// var url1 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am the universe boss";
// fetch(url1)
//     .then(response => response.json())
//     .then(json => console.log(json))
// var url2 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am iron-man";
// fetch(url2)
//     .then(response => response.json())
//     .then(json => console.log(json))
// const text1 = "i am meet ved";
// const text2 = "i am the universe boss";
// const text3 = "i am  iron-man";
// // url(text1);
// doFetch(text1);
// doFetch(text2);
// doFetch(text3);

// function doFetch(text) {
//     fetch(url(text))

//     .then(response => response.json())
//         .then(json => console.log(json))

// }