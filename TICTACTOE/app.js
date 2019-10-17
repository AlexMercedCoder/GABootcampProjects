//added the defer keyword to my script tag, to avoid script pre-loading problems

//GLOBAL DATA SETS
const awpic = "./ted.jpg"
const krpic = "./bill.jpg"
let billorted = false;
let marker = "X";
let gameArray = [["-","-","-"],
             ["-","-","-"],
             ["-","-","-"]];

//FUNCTIONS DEFINITIONS

const chooseBill = (event) =>{

    $bill = $('<img>').attr('src',awpic);
    event.append($bill);
    markBoard(event.attr('id'))
    if (checkWin())
    {alert("Bill has won!!!")}
    billorted = true;
    marker = "O"

    }

const chooseTed = (event) =>{

    $ted = $('<img>').attr('src',krpic);
    event.append($ted);
    markBoard(event.attr('id'))
    if (checkWin())
    {alert("Ted has won!!!")}
    billorted = false;
    marker = "X"

    }

const markBoard = (id) => {
    console.log(id);
    switch (id){
        case "one":
        gameArray[0][0] = marker;
        break;

        case "two":
        gameArray[0][1] = marker;
        break;

        case "three":
        gameArray[0][2] = marker;
        break;

        case "four":
        gameArray[1][0] = marker;
        break;

        case "five":
        gameArray[1][1] = marker;
        break;

        case "six":
        gameArray[1][2] = marker;
        break;

        case "seven":
        gameArray[2][0] = marker;
        break;

        case "eight":
        gameArray[2][1] = marker;
        break;

        case "nine":
        gameArray[2][2] = marker;
        break;

        }
}

const reset = () => {

    billorted = false;
    marker = "X";
    gameArray = [["-","-","-"],
                 ["-","-","-"],
                 ["-","-","-"]];
    $('.square').empty();

}


const markSquare = (event) => {

    if ($(event.target).children().length > 0 ){

    }else if (billorted){
        chooseTed($(event.target));
    }else {
        chooseBill($(event.target));
    }
}

const checkWin = () => {

    if (gameArray[0] === [marker, marker, marker] ||
        gameArray[1] === [marker, marker, marker] ||
        gameArray[2] === [marker, marker, marker] )
        {
            return true;
        }

    if (gameArray[0][0] === marker &&
        gameArray[1][0] === marker &&
        gameArray[2][0] === marker){
            return true
        }

    if (gameArray[0][1] === marker &&
        gameArray[1][1] === marker &&
        gameArray[2][1] === marker){
            return true
            }

    if (gameArray[0][2] === marker &&
        gameArray[1][2] === marker &&
        gameArray[2][2] === marker){
            return true
            }

    if (gameArray[0][0] === marker &&
        gameArray[1][1] === marker &&
        gameArray[2][2] === marker){
        return true
                    }

    if (gameArray[2][0] === marker &&
        gameArray[1][1] === marker &&
        gameArray[0][2] === marker){
        return true
                    }

    return false


}

//DOM VARIABLES



//EVENT LISTENERS
$('.square').on('click', markSquare)
$('button').on('click', reset)


//THE PROGRAM
