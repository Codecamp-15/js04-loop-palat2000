// for (i = 0;i < 3;i++) {
//     console.log("Hello world");
// }
// for (i=1;i<=20;i++){
//     if (i%3==0&&i%5==0){
//         console.log("FizzBuzz");
//     }else if (i%3==0){
//         console.log("Fizz");
//     }else if (i%5==0){
//         continue;
//     }else {
//         console.log(i);
//     }
// }
// let str = "";
// for (i=0;i<=20;i++){
//     if (i%3==0) continue;
//     str += i;
// }
// console.log(str);
// let src = "codecamp";
// let res = "";
// for (i = 0; i<src.length;i++){
//     let c = src[i];
//     if (c==='a'||c==='e'||c==='i'||c==='o'||c==='u') continue;
//     res += src[i];
// }
// console.log(res);


// let num = prompt("Enter number");
for (i=2;i<=12;i++){
    for (n=1;n<=12;n++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
    console.log("\n");
}
