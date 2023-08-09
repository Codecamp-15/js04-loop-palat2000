let n = +prompt("Enter number");
let i = 0;
let count = 0;
if (n<0) n = -n;
while (n>=1){
    n /= 10;
    count++;
    i++;
}
alert(count);
