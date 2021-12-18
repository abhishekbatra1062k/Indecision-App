const square=function(x){
    return x*x;
};
const squareArrow=(x)=>{
    return x*x;
};
const SquareArrow=(x) => x*x;

console.log(square(8));
console.log(squareArrow(8));
console.log(SquareArrow(8));

// Challenge 

var fullName='Abhishek Batra';
const getFirstName=(fullName)=>{
    return fullName.split(' ')[0];
};
console.log(getFirstName(fullName))

var fullName='Jai Batra';
const getFirstNameArrow=(fullName)=>fullName.split(' ')[0];
console.log(getFirstName(fullName))
