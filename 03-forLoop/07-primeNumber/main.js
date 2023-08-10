// let primeNum = [];
// let isPrime = true;
console.time()
for (i=2;i<=1000;i++){
    let isPrime = true;
    for(n=2;n<=i;n++){
        if(i!==n&&i%n===0){
            isPrime = false;
            break;
        }
        }
        if(isPrime) console.log(i);
}
console.timeEnd()

// console.timeEnd()
// console.log(primeNum);

// for (n = 2; n <= 10; n++){
//     let isPrime = true;
//     for (j = 2; j < n; j++){
//         if(n%j==0){
//             isPrime = false;
//             break;
//         }
//         if (isPrime) {
//             console.log(n);
//         }
//     }
// }



// let n = 12;
// console.time()
// for (n=2;n<1000;n++){
// let isPrime = true;
// for (j = 2; j < n; j++){
//     if(n%j===0){
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log(n);
// }
// }
// console.timeEnd()



// for (i=0;i<10;i++){
//     if (i==5)break;
//     console.log(i);
// }