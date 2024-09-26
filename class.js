const products = [
    {id: 1,  name: 'lenevo', price: 65000},
    {id: 2,  name: 'dell', price: 45000},
    {id: 3,  name: 'hp', price: 40000},
    {id: 4,  name: 'macbook', price: 165000},
]

// has some propertise, method
class Product{
    country = 'Bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenevo = new Product('le le lenevo')
// console.log(lenevo);
// lenevo.speak('ayeiinn')

class Teacher{
    constructor(name,subject){
        this.name = name
        this.subject = subject
    }
    lecture(){
        console.log('mam is teaching me how to love her');
    }
}

const purna = new Teacher('Purna mam', 'physics')
console.log(purna);

const bou = new Teacher('Bou', 'English')
console.log(bou);