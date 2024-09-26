class Person{
    constructor(nsme, age){
        this.name = nsme;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const sunFlower = new Person('Purna', 19)
console.log(sunFlower);
sunFlower.sleep();
const rose = new Person('Punu', 19)
rose.sleep();

// vejal
const lazy = sunFlower.sleep;
lazy()