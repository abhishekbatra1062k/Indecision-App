var nameVar='Abhishek Batra';
var nameVar='Jai Batra';
console.log('nameVar',nameVar);

let nameLet='Jan';
nameLet='Mike';
console.log('nameLet',nameLet);

const nameConst='Frank';
console.log('nameConst',nameConst);

// Block Scoping

const fullName='Abhishek Batra';
let firstName
if(fullName){
    firstName=fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName)