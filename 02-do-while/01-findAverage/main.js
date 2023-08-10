// const isInvalid = num == null || num.trim() === "" || isNaN(num) ;
// const outOfRange = +num < 1 || +num > 99;
// const isInRange = +num >= 1 || +num <= 99;
// if(isInvalid) {
//     alert("Invalid Input");
// }else if (outOfRange) {
//     alert("Invalid Range");
// }else if (isInRange) {
//     sum += +num;
// }
let num;
let count = 0;
let sum = 0;
do {
  num = prompt("Enter number") || "";
  if (!isNaN(+num)&&+num!==0) {
    sum += +num;
    count++;
}else break;
} while (num.trim()!=="");
alert(sum);
alert(sum/count);
