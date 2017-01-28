var blocks = document.querySelectorAll(".square");
var rField = document.getElementById("r");
var gField = document.getElementById("g");
var bField = document.getElementById("b");
var result = document.querySelector("h2"); //to show wrong or right
var aRed, aBlue, aGreen, red, green, blue; //a<Color> refers to answer color
var correctColor = Math.floor(Math.random() * 6); // storing correct block number
var isCorrect=false;
var data = []; // to store all the blocks rgb color as objects

function changeBackground(tile)
{
    // generating random colors using Math.random() * (max - min) + min
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    tile.style.background = "#"+(red).toString(16)+(green).toString(16)+(blue).toString(16); //changing block background color by converting RGB to hexadecimal
    data.push({redVal: red,blueVal: blue,greenVal: green});
}

// function checkResult()
// {
// TO DO
// }

for(var i=0 ; i<6; i++)
{
    changeBackground(blocks[i]);
    // blocks[i].addEventListener("click", checkResult);
}

rField.textContent=data[correctColor].redVal;
bField.textContent=data[correctColor].blueVal;
gField.textContent=data[correctColor].greenVal;
