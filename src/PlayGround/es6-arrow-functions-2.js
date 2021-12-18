const add=(a,b)=>{
    // console.log(arguments);
    return a+b;
}
console.log(add(55,1))

const user={
    name:'Abhishek Batra',
    cities: ['New York','London'],
    printPlacesLived:function(){
        this.cities.forEach((city)=>{
            console.log(this.name +' has lived in '+ city);
        })
    }
};
user.printPlacesLived()

// Challenge

const multipliers={
    numbers: [1,59,25,6,8,43,4],
    multiplyBy: 5,
    multiply: function(){
        return this.numbers.map((number) => number*this.multiplyBy)
    }
}

console.log(multipliers.multiply())