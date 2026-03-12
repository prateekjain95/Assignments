/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/

let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditCount:number=0;
let debitCount:number=0;
let totalAmountCredited:number=0;
let totalAmountDebited:number=0;
let suspiciousAccount:number=0;

for (let i=0;i<transactions.length;i++)
{
    if(transactions[i]>0){
        creditCount++
        totalAmountCredited=totalAmountCredited+transactions[i];

    }

    if(transactions[i]<0){
        debitCount++
        totalAmountDebited=totalAmountDebited+transactions[i];

    }
    if(transactions[i]>10000||transactions[i]<-10000){
        console.log("Suspicious credit/debit transactions with amount ",transactions[i])
        suspiciousAccount++
    }
}

        let balance:number=totalAmountCredited+totalAmountDebited;
        console.log("Total Credit Transactions:", creditCount);
        console.log("Total Debit Transactions:", debitCount);

        console.log("Total Credited Amount:", totalAmountCredited);
        console.log("Total Debited Amount:", totalAmountDebited);

        console.log("Remaining Balance:", balance);

        console.log("Total Suspicious Transactions:", suspiciousAccount);

