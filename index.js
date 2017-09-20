var sentence = "Javascript is a really cool language!";

var newSentence = " ";

document.getElementById("div1").innerHTML = "<p>" + sentence + "</p>";

var words = sentence.split(" ");

console.log(words);

var message = words.splice(3,2, "powerful");

alert("Removed words: " + message);

document.getElementById("div2").innerHTML = "<p>" + words.join(" ") + "</p>";