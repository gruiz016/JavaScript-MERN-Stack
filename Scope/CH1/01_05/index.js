warrior = 'Ninja'; // Warrior is defined here
warrior3 = 'Viking';


const screamWarrior = () => {
    let warrior2 = 'Samurai';
    // wrap in a function now is a closure
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
            
        }
    }
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);

var warrior; // warrior is declared here.
var warrior3;

