let allSum = 0;
let evenSum = 0;
let oddSum = 0;
let songHarnlongTou = 0;
let samHarnLongTou =0;
for (i=1;i<=100;i++){
    allSum += i;
    if(i%2===0){
        evenSum += i;
        songHarnlongTou += i**2;
    }else{
        oddSum += i;
    }
    if(i%3===0){
        samHarnLongTou += i**2;
    }
}
console.log(allSum);
console.log(evenSum);
console.log(oddSum);
console.log(songHarnlongTou);
console.log(samHarnLongTou);