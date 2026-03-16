/*
Assignment 7 : Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";
*/

let sentence:string="Java programming is fun and challenging";
let words = sentence.split(" ");
console.log(words.length);

// reverse order
console.log("Reverse Oder")
let reverSentence:string="";
for(let i=words.length;i>=0;i--){
    reverSentence+=words[i] + "";
    console.log(reverSentence);
}

// upperCase

let capitalSentence:string="";
for(let i=0;i<words.length;i++){
   let word=words[i];
   let firstCharacter=word.charAt(0).toUpperCase;
   let otherCharacter=word.substring(1);
   capitalSentence=capitalSentence+firstCharacter+otherCharacter;
   console.log(capitalSentence);

}
