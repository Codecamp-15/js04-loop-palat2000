let num;
let isEmpty;
let isNan;
let outOfRange;
do {
    num = prompt("Enter number") || "";
    isEmpty = num.trim() === "";
    isNan = isNaN(num);
    outOfRange = +num < 1 || +num > 99;
    if(isEmpty || isNan) {
        alert("Invalid Input. Try 1-99");
    }else if (outOfRange){
        alert("Invalid Input. Try 1-99");
    }
} while(isEmpty || isNan)


//guess num
let guessNum;
let n = 0;
do{
    guessNum = prompt("Enter your answer") || "";
    outOfRange = +guessNum < 1 || +guessNum > 99;
    isEmpty = guessNum.trim() === "";
    isNan = isNaN(guessNum);
    if(isEmpty || isNan) {
        alert("Invalid Input. Try 1-99");
    }else if (outOfRange){
        alert("Invalid Input. Try 1-99");
    }else if (+guessNum > num){
        alert("Too High");
    }else if (+guessNum < num){
        alert("Too Low");
    }else if (+guessNum == num){
        alert("correct");
    }
    n++
    if(n == 5){
        alert("kak");
    }
} while (+guessNum != +num && n != 5)