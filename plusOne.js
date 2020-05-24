let accumulator = 0;
let accumNum = 10;
let numberOfClicks = 0;

function add1() {
    accumulator = accumulator + accumNum;
    numberOfClicks = numberOfClicks + 1;
    document.getElementById("accumulateLabel").innerHTML = accumulator;
}