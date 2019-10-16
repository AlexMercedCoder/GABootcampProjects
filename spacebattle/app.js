////////////////////////////////////////////////
//SUMMARY
//
//Game allows you to combat random number of Ships
//Allows you to escape, negotiate for peace, make repairs, and more
//Keeps track of Wins
//Player can name their ships
//player can select which enemy to engage and inspect their stats
//Game is live at https://dazzling-einstein-0e4817.netlify.com/







//////////////////////
//random number function
//by Alex Merced
////////////////////////
const randNum = (num) => {

    return Math.floor(Math.random()*(num+1));

}

///////////////////
//random number in a range function
//by Alex Merced
///////////////////

const randRange = (floor,ceiling) => {
    let num = 0;
    while(num < floor || num > ceiling){
        num = randNum(ceiling);

    }
    return num;
}

//Random Accuracy (number under 1)
const randAcc = (floor,ceiling) => {
    let num = 0;
    while(num < floor || num > ceiling){
        num = Math.random();

    }
    return num;
}



///////////////////
//Define Ship class
////////////////////

class Ship {

    //The Constructor
    constructor(name = "USS Schwarzenegger", hull = 20, firepower =5, accuracy =.7){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.speed = randNum(100);
        this.escaped = false;
        this.diplomacy = randNum(100);
        this.peace = false;

    }
    //Use to attach other ships
    attack(enemy){
        if (enemy.hull <= 0){
            alert(`${enemy.name} has already been destoryed`)
        }else{

            if (Math.random()<this.accuracy){

                alert(`${this.name} has done ${this.firepower} damage to ${enemy.name}`);
                enemy.hull -= this.firepower;
            } else{
                alert(`${this.name} missed`)
            }

        }
    }

    //Do they escape?
    escape(){if(randNum(100)<this.speed){
        this.escaped = true;
        alert('success!');
        } else {alert(`${this.name} failed to escape`)}}


    //Do they create a peace treaty
    negotiate(){if(randNum(100)<this.diplomacy){
        this.peace = true;
        alert('success!');
    } else {alert(`${this.name} failed to negotiate`)}}

    //Fix your ship
    repair(){
        let results = randNum(10);
        this.hull += results;
        alert(`${this.name} has repaired the hull by ${results}`)
    }

    //improve our firepower
    enhance(){
        let results = randNum(10);
        this.firepower += results;
        alert(`${this.name} has improved firepower by ${results}`)

    }



}


//////////////////
//Is the Enemy Fleet Destoryed function
//////////////////

const isntDestroyed = (fleet) => {

    return fleet.some((ship)=>{
        return ship.hull > 0;
    });

}


// how many ships are left?
const isntDestroyedNum = (fleet) => {

    return fleet.filter((ship)=>{
        return ship.hull > 0;
    }).length;

}


//////////////////////////////////
//Moving Core Game Logic into a function
/////////////////////////////////
//*takes hero ship and array of enemy ships

const gameBattle = (hero,enemy,won) => {

    //setting the stage
    alert(`You are the Captain of the ${hero.name} and ${enemy.length} enemy ships have confronted you, use leadership and bravery to survive!`);

    let command = '';
    let commandNum = 0;
    //The Game
    while (isntDestroyed(enemy) && hero.hull > 0 && hero.escaped === false && hero.peace === false)

    {
        //User Interface
        command = prompt(`Please enter any of the following commands: "a" to attack, "i" to inspect an enemy, "e" to attempt to escape, "r" for repairs, "n" to negotiate,"s" to see stats and  "f" enhance firepower.`)

        //Results of Selection
        switch(command){

            case 'a':
            target = prompt(`Choose which ship to attack by entering 1 - ${enemy.length}`)
            commandNum = parseInt(target)-1;
            if (commandNum < enemy.length && commandNum >= 0)
                {hero.attack(enemy[commandNum]);
                if(enemy[commandNum].hull > 0)
                {enemy[commandNum].attack(hero);}}
            break;

            case 'i':
            target = prompt(`Choose which ship to inspect by entering 1 - ${enemy.length}`)
            commandNum = parseInt(target)-1;
            if (commandNum < enemy.length && commandNum >= 0)
                {alert(`

                    Name: ${enemy[commandNum].name}\n
                    Hull(health):  ${enemy[commandNum].hull}\n
                    Firepower: ${enemy[commandNum].firepower}\n
                    Accuracy: ${enemy[commandNum].accuracy}\n

                    `)}
            break;

            case 'e':
            hero.escape();
            if(hero.escaped == false)
                {enemy[enemy.length-1].attack(hero);}
            break;


            case 'n':
            hero.negotiate();
            if(hero.peace == false)
                {enemy[enemy.length-1].attack(hero);}
            break;


            case 'r':
            hero.repair();
            enemy[randNum(enemy.length-1)].attack(hero)
            break;

            case 'f':
            hero.enhance();
            enemy[randNum(enemy.length-1)].attack(hero)
            break;

            case 's':
            alert(`

                Hull(health): ${hero.hull}\n
                Firepower: ${hero.firepower}\n
                Accuracy: ${hero.accuracy}\n
                Speed: ${hero.speed}\n
                Diplomacy: ${hero.diplomacy}\n
                Wins: ${won}\n

                `)
            break;

            default:
            alert('Captain, why don\'t you do something?')
            enemy[randNum(5)].attack(hero)
            break;



        }
    alert(`The hull of the ${hero.name} is at ${hero.hull}, taking damage will reduce your hull, be careful! The are ${isntDestroyedNum(enemy)} ships left to battle.`)

    }

    if (isntDestroyed(enemy) === false){
        alert(`You have destroyed the enemy ships! Huzzah!`);
        wins++;
    }

    if (hero.hull <= 0){
        alert(`You have perished`)
    }

    if (hero.escaped){
        alert(`You have escaped the battle safely`)
    }

    if (hero.peace){
        alert(`You have negotiated a cease fire and brought peace to the infinite universe`);
        wins++;
    }

}



////////////////////////testing random
// console.log(randRange(10,20));
// console.log(randRange(10,20));
// console.log(randRange(10,20));
// console.log(randRange(10,20));
// console.log(randRange(10,20));
// console.log(randRange(10,20));
// console.log(randRange(10,20));

/////////////////////////////TEST OBJECTS
// const test1 = new Ship()
// const test2 = new Ship('tester')
//
// test1.attack(test2);
// test2.attack(test1);
//
// console.log(test1);
// console.log(test2);

let playAgain = true;
let playerInput = "";
let wins = 0;


const startGame = () => {


///////////////////////
//THe Program
////////////////////////
    let playAgain = true;
    let playerInput = "";
    let wins = 0;
    let shipName = prompt("What shall you call your space battleship");


//Game loop begin and player can play as many times as they want

    while (playAgain == true){
//Random number of enemy ships, four through ten
        let enemyNum = randRange(4,10);

//Our Hero Enters the Universe

        let hero = new Ship(shipName);

//Our Six Attacking Ships Arrive

        let enemy = [];

        for (let i = 1; i<=enemyNum; i++){

            enemy.push(new Ship(`Evil Ship ${i}`,randRange(3,6),randRange(2,4),randAcc(.6,.8)))

        }

        gameBattle(hero,enemy,wins);

        playerInput = prompt ("want to play again?","yes or no");

        if (playerInput === 'no'){
        playAgain = false;
        }

    }
}

//Testers
// const deadship = [new Ship('Dead',0,0,0)];
// console.log(hero);
// console.log(enemy);
// console.log(isntDestroyed(enemy))

// //setting the stage
// alert(`You are the Captain of the ${hero.name} and ${enemy.length} enemy ships have confronted you, use leadership and bravery to survive!`);
//
// let command = '';
// let commandNum = 0;
// //The Game
// while (isntDestroyed(enemy) && hero.hull > 0 && hero.escaped === false && hero.peace === false)
//
// {
//     //User Interface
//     command = prompt(`Please enter any of the following commands: "a" to attack, "e" to attempt to escape, "r" for repairs, "n" to negotiate,"s" to see stats and  "f" enhance firepower.`)
//
//     //Results of Selection
//     switch(command){
//
//         case 'a':
//         target = prompt(`Choose which ship to attack by entering 1 - ${enemy.length}`)
//         commandNum = parseInt(target)-1;
//         if (commandNum < enemy.length - 1)
//             {hero.attack(enemy[commandNum]);
//             if(enemy[commandNum].hull > 0)
//             {enemy[commandNum].attack(hero);}}
//         break;
//
//         case 'e':
//         hero.escape();
//         if(hero.escaped == false)
//             {enemy[commandNum].attack(hero);}
//         break;
//
//
//         case 'n':
//         hero.negotiate();
//         if(hero.peace == false)
//             {enemy[commandNum].attack(hero);}
//         break;
//
//
//         case 'r':
//         hero.repair();
//         enemy[randNum(5)].attack(hero)
//         break;
//
//         case 'f':
//         hero.enhance();
//         enemy[randNum(5)].attack(hero)
//         break;
//
//         case 's':
//         alert(`
//
//             Hull(health): ${hero.hull}\n
//             Firepower: ${hero.firepower}\n
//             Accuracy: ${hero.accuracy}\n
//             Speed: ${hero.speed}\n
//             Diplomacy: ${hero.diplomacy}\n
//
//             `)
//         break;
//
//         default:
//         alert('Captain, why don\'t you do something?')
//         enemy[randNum(5)].attack(hero)
//         break;
//
//
//
//     }
// alert(`The hull of the ${hero.name} is at ${hero.hull}, taking damage will reduce your hull, be careful!`)
//
// }
//
// if (isntDestroyed(enemy) === false){
//     alert(`You have destroyed the enemy ships! Huzzah!`)
// }
//
// if (hero.hull <= 0){
//     alert(`You have perished`)
// }
//
// if (hero.escaped){
//     alert(`You have escaped the battle safely`)
// }
//
// if (hero.peace){
//     alert(`You have negotiated a cease fire and brought peace to the infinite universe`)
// }
