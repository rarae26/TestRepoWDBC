let firstName: String = "Ramya";
let lastName: String = 'Ravi';
let found: boolean =true;
let grade: number = 88;



console.log(firstName + " " + lastName);
console.log(`Hi + ${firstName}`);

let reviews: number[] =[4,2,2,3,1,1,];
let total: number =0;

for(let i=0; i<reviews.length;i++){
    console.log(reviews[i]);
    total+=reviews[i];
}
console.log(total);

let avg:number=total/reviews.length;

console.log(avg);

let sports: string[]= ["Gold","Tennis","Swimming"];


sports.push("Cricket");
sports.push("Football");
for(let temp of sports){
    
    if(temp=='Tennis'){
        console.log(`I love ${temp}`);
    } else{
        console.log(temp);
    }
}