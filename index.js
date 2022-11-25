const names= ["Guadalupe", "Ollie", "Aki"];
let length= names.length;

function writeCards(names, event) {
    for (let i = 0;i <= length; i++) { 
        return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    console.log(names.map(name=>`Thank you, ${name}, for the wonderful ${event} gift`));
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--);
    }
    return(countDown--);
}
console.log(countDown(10));

function countDowns() {
    var countDowns= 4;
    while (countDowns >= 0) {
        console.log(countDowns--);
    }
    return(countDowns--);
}
console.log(countDowns(4));




