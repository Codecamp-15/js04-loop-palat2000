for (i=2;i<=100;i++){
    for(n=2;n<=i;n++){
        if(i!==n&&i%n===0){
            break;
        }else if(i===n&&i%n===0){
            console.log(i);
        }
    }
}