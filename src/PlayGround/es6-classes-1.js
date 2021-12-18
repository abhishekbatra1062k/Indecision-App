// Car Class
// make,model,vin,getDiscription

class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        // return 'Hi, I am '+this.name+'!';
        return `Hi, I am ${this.name}!`;
    }
    getDiscription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDiscription(){
        let description=super.getDiscription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
        return description;
        //  `${this.name} is ${this.age} year(s) old. He is a ${this.major} Student.`;
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getGreeting(){
        let des=super.getGreeting();
        if(this.homeLocation){
            des += ` I am visiting from ${this.homeLocation}.`
        }
        return des;
    }
}

const me=new Traveller('Abhishek Batra',20,'Delhi');
// console.log(me.hasMajor())
console.log(me.getGreeting())

const other=new Traveller();
// console.log(other.hasMajor())
console.log(other.getGreeting())
