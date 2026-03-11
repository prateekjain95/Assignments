/*Assignment -3 (Arrays/Datatypes/Operators)
1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students
Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0*/

let students:string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82];
let updatedMark:number[]=[];
for(let i=0;i<marks.length;i++){
    updatedMark[i]=marks[i]+10;
}
console.log("Finale mark")
// This loop to print students as 3 students so student.lenght
for(let i=0;i<students.length;i++){
    console.log(students[i] + ":" +updatedMark)
}
let total=0;
for(let i=0;i<updatedMark.length;i++){
    total=total+updatedMark[1];
}
    let average=total/updatedMark.length;
    console.log("Average is " , average);

