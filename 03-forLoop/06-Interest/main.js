let money = 100000;
let interest = 0.025;
for(i=0;i<10;i++){
    money += money*interest;
}
console.log(money.toFixed(2));