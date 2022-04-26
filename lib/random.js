const randomNumber = require('../lib/random.test.js');
const Potion = require('../lib/Potion.js');

function randomNumber(){
    return Math.floor(Math.random()*9+1);
}

module.exports=randomNumber;

