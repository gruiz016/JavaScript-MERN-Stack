'use strict';

const warrior = {
    name: 'Jude',
    type: 'Ninja',
    weapon: 'Katana',
    agility: 75,
}; //global scope

const screamWarrior = () => {
    let warrior2 = 'Samurai';
    warrior3 = 'Viking';
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
            
        }
    }
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);


