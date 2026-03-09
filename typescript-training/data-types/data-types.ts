// Syntax to store datatype in typescript
// declaration variable:datatype=variable
//there are 2 types of datatype in TS
// Premittive datatypes(Mutable)
// Non Premitive (Immutable)
// Number -- the datatype used to store no with/without decimals
let num:number=10;
let num1:number=15.54;
console.log(typeof num);
console.log(typeof num1);
console.log(num);
console.log(num1);

//String -- Datatype used for coolection of characters
let employee:string="Prateek jain";
let location:string="Indore";
let company:string="Planful";
console.log(typeof employee);
console.log(typeof location);
console.log(typeof company);
console.log(employee);
console.log(location);
console.log(company);

//boolean -- The data type used to store true / false values
let x:number=10;
let y:number=20;
let z:boolean=x>y;
console.log(z);

//null -- The data type used to store null values
let n:null=null;
console.log(n);

//undefined==>> the data type used to store no values/undefined
let u:undefined;
console.log(u);

// union -- it represnets more thn one data assigned to the variables
let employeesAdd: string | number | boolean = "Vijay Ngar Indore ";
console.log(employeesAdd)

employeesAdd=123;
console.log(employeesAdd);

employeesAdd=true;
console.log(employeesAdd);

// any == it is used to store any type of values
