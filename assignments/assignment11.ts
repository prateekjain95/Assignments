const n:number=5;

for(let i=1;i<=n;i++){
    let row=" ";

    for(let j=1;j<=n-1;j++){
        row+=" ";
}
for(let k=1;k<=i;k++){
    row +=k + " ";
}
console.log(row);

}

for(let i=n-1;i>=1;i--){
    let row=" ";

    for(let j=1;j<=n-1;j++){
        row+=" ";

    }
    for(let k=1;k<=i;k++){
        row+= k+" ";
    }
    console.log(row);
}