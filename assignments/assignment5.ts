/*
Employee Table

S.No     Name                Base Salary    Experience (Years)   Year-End Rating (Out of 5)
1      Alice Johnson           75000.0            5.1                     4.2
2      Bob Smith                68000.0           3.2                     3.8
3      Carol Davis              82000.0           7.1                     4.5
4      David Brown              90000.0           10.2                    2.5
5      Eva Green                60000.0           2.4                     3.5

Hike

Rating      % of base Salary as variable pay            Bonus
> =4.0                15.0                               1500
>=3 && < 4            10.0                               1200
< 3.0                 3.0                                 300

Extra Perks

Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .*/

let names:string[]=["Alice Johnson","Bob Smith","Carol Davis","David Brown","Eva Green"];
let salary:number[]=[75000,60000,82000,90000,60000];
let years:number[]=[5.1,3.2,7.1,10.2,2.4];
let rating:number[]=[4.2,3.8,4.5,2.5,3.5];

let hikeDetails=new Map<String,number>();

for(let i=0;i<names.length;i++){
    let variablePay=0;
    let bonus=0;
    if(rating[i]>=4){
        variablePay=15/100;
        bonus=1500;
    }
    else if(rating[i]>=3 && rating[i]<4){
        variablePay=10/100;
        bonus=1200;
    }
    else{
        variablePay=3/100;
        bonus=300;
     }
    let reward=0
    if(years[i]>=5){
        reward=5000;
    }

    let hike=(salary[i]*variablePay)+bonus+reward;
    let hikePercent=hike/salary[i];
    hikeDetails.set(names[i],hikePercent);
    
}
console.log(hikeDetails)
