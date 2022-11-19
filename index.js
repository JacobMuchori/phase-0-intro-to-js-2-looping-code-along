const names = ["Guadalupe", "Ollie", "Aki"];
let length= names.length


function writeCards(names, event) {
    for (let i = 0;i < length; i++) { 
        console.log(`Thank you, ${names[i]}, for the ${event} gift!`);
    }
        return(`Thank you, ${names}, for the ${event} gift!`);
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown() {
    var countDown = 10;
    while (countDown > 0) {
    console.log(countDown--);
    }
    return(countDown--);
}
console.log(countDown(10));

function countDowns() {
    var countDowns= 4;
    while (countDowns > 0) {
        console.log(countDowns--);
    }
    return(countDowns--);
}
console.log(countDowns(4));




