let n = prompt("Enter number");
let i = 0;
let sum = 0;
if(n<0) n = -n;
while (n) {
    let remainder = n % 10;
    n = (n-remainder)/10;
    sum += remainder;
}
alert(sum);