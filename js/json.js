// javascript object notation
// JSON
const user = {id : 11, name : 'imtiaj' , job : 'actor' };
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);
