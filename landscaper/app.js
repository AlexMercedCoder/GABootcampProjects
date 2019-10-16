//Set my DOM Variables, make script tag says defer or wont work

let bones = document.getElementById('bones');
let teeth = document.getElementById('teeth');
let scissors = document.getElementById('scissors');
let lawnmower = document.getElementById('lawnmower');
let lostsouls = document.getElementById('lostsouls');
let bj = document.getElementById('bj');


//Functions for checking the quantity of bones and the win condition

const boneNum = () => {return parseInt(bones.innerHTML,10);}

const checkBones = () => {

    if (boneNum() >= 1000 && parseInt(bj.innerHTML,10) >= 1)
        {alert("You FREED THE LOST SOULS!!! YOU WIN!!!");}
        else {alert("You need more bones and to summon Beetlejuice to free the Souls.")}

            }

//Function for use teeth to Landscaper

const useTeeth = () => {

    alert("You used teeth to landscape, residents reward you with 1 bone.");
    bones.innerHTML = boneNum() + 1;

}

//Function to use Scissors to landscape

const useScissors = () => {
    if (parseInt(scissors.innerHTML,10) >= 1){
        alert("You used scissors to landscape, residents reward you with 5 bones.");
        bones.innerHTML = boneNum() + 5;
    }else{

        let response = prompt('Do you want to buy scissors for 5 bones?','yes/no');
        if (response.toLowerCase() == 'yes'){
            if (boneNum() >= 5){
                alert('you have bought scissors!!!');
                bones.innerHTML = boneNum() - 5;
                scissors.innerHTML = 1;

            }else{alert('you need more bones to buy scissors!')}

        }

    }
}

// Function for Rust Lawnmower

const useLawnmower = () => {
    if (parseInt(lawnmower.innerHTML,10) >= 1){
        alert("You used rusty lawnmower to landscape, residents reward you with 50 bones.");
        bones.innerHTML = boneNum() + 50;
    }else{

        let response = prompt('Do you want to buy the rusty lawnmower for 25 bones?','yes/no');
        if (response.toLowerCase() == 'yes'){
            if (boneNum() >= 25){
                alert('you have bought the Rusty Lawnmower!!!');
                bones.innerHTML = boneNum() - 25;
                lawnmower.innerHTML = 1;

            }else{alert('you need more bones to buy lawnmower!')}

        }

    }
}

//function for the lost souls

const useLostSouls = () => {
    if (parseInt(lostsouls.innerHTML,10) >= 1){
        alert("The lost souls helped you landscape, residents reward you with 100 bones.");
        bones.innerHTML = boneNum() + 100;
    }else{

        let response = prompt('Do you want to hire the lost souls for 250 bones?','yes/no');
        if (response.toLowerCase() == 'yes'){
            if (boneNum() >= 250){
                alert('you have hired the Lost Souls!!!');
                bones.innerHTML = boneNum() - 250;
                lostsouls.innerHTML = 1;

            }else{alert('you need more bones to hire lost souls!')}

        }

    }
}

//function for summoning beetlejuice

const summonBj = () => {
    if (parseInt(bj.innerHTML,10) >= 1){
        alert("Beetlejuice fills the graveyard with... life? residents reward you with 250 bones.");
        bones.innerHTML = boneNum() + 250;
    }else{

        let response = prompt('Do you want to summon Beetlejuice for 500 bones?','yes/no');
        if (response.toLowerCase() == 'yes'){
            if (boneNum() >= 250){
                alert('you have summoned Beetlejuice!!!');
                bones.innerHTML = boneNum() - 500;
                bj.innerHTML = 1;

            }else{alert('you need more bones to summon Beetlejuice!')}

        }

    }
}
