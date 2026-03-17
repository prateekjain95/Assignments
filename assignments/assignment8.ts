/*
Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";
*/

let paragraph: string ="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let serachKeyword:string="Java";
let javaCount:number=0;
let index:number=0;

while(true){
    index=paragraph.indexOf(serachKeyword,index);
    if(index==-1){
        break;
    }
    console.log("Java found at index",index);
    javaCount++
    index++
}
console.log("Total Java Occurence",javaCount);


