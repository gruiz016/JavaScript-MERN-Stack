const warrior = [{
    name: 'Viking',
    agility: 60,
}, {
    name: 'Ninja',
    agility: 80,
}, {
    name: 'Marine',
    agility: 82,
},];

const shoutWarrior = () => {
    warrior.map((warrior) => {
        if (warrior.name === 'Marine') {
            let marine = warrior.name;
            return console.log(`${marine}'s yells YRAH!`);
        }
    });

};
shoutWarrior();