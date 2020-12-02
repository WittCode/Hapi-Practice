const fetch = require('node-fetch');


async function getUser1() {
    console.log("Starting to get user 1!");
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log("Done fetching user 1!");
    let myResponse = await response.json();
    console.log(myResponse);
}

function doRandomThings() {
    console.log("Thing 1");
    console.log("Thing 2");
    console.log("Thing 3");
    console.log("Thing 4");
    console.log("Thing 5");
    console.log("Thing 6");
}

async function getUser3() {
    console.log("Starting to get user 3!");
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
    console.log("Done fetching user 3!");
    let myResponse = await response.json();
    console.log(myResponse);
}

getUser1();
getUser3();

doRandomThings();
