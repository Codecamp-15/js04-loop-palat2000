// let star = '';
// let result = '';
// for (i=1;i<=4;i++){
//     star += '*';
//     result += star +'\n';
// }
// console.log(result);

let str = "";
for(i=1;i<=4;i++){
    for(j=1;j<=4;j++){
        if(j<=i){
            str += "*";
            continue;
        }else {
            str += " ";
        }
    }
    str += "\n";
}
console.log(str);