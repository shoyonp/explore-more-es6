// data access
const data = [{id: 1, name:'Purna', address: 'amar kache'}]

console.log(data[0].address);


const products ={
    count: 5000,
    data:[
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000}
    ]}

// second product price
console.log(products.data[1].price); 


const user = {
    id: 5001,
    name: 'Purna',
    address: {
        street:{
            first: '16/19 amr side',
            second: 'amr goli',
            third: 'home'
        },
        city: 'amar kache'
    }
}

const user2 = {
    id: 5002,
    name: 'shoyon',
    address:{
        city: 'purnar kache',
        address: 'Bangladesh'
    }
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);