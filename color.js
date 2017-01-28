var blocks = document.querySelectorAll(".square");
var rField = document.getElementById("r");
var gField = document.getElementById("g");
var bField = document.getElementById("b");
var result = document.querySelector("h2");
var count = 0;
var aRed, aBlue, aGreen, red, green, blue;
var correctColor = Math.floor(Math.random() * 7);
var isCorrect;

function changeBackground(tile)
{  
    // generating random colors using Math.random() * (max - min) + min
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    tile.style.background = "#"+(red).toString(16)+(green).toString(16)+(blue).toString(16);
    if(correctColor===count)
        {
            rField.textContent=red;
            gField.textContent=green;
            bField.textContent=blue;
            aRed =red;
            aBlue=blue;
            aGreen=green;
        }
    count+=1;
}

function checkResult()
{
    if(aRed===red && aBlue===blue && aGreen===green)
        {
            result.textContent="Wrong";
        }
}



for(var i=0 ; i<7; i++)
    {
        changeBackground(blocks[i]);
        blocks[i].addEventListener("click", checkResult);
    }

