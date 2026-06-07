/*let el1 = document.getElementById("rock")
let rock = el1.id;
//console.log(rock);
let el2 = document.getElementById("paper")
let paper = el12.id;
let el3 = document.getElementById("scissor")
let scissor = el3.id;*/

let elements = document.querySelectorAll("img");
let choices = ["rock", "paper", "scissor"];
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let textBox = document.querySelector("#text-box")

user.innerText = 0;
comp.innerText = 0;


elements.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.style.border = "5px solid black";
    });
    el.addEventListener("mouseout", () => {
        el.style.border = "0";
    });
    el.addEventListener("click", () => {
        let value = el.id;
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomValue = choices[randomIndex];
        //console.log("user value : " + value);
        //console.log("comp value : " + randomValue);
        winner(value, randomValue);
    });
});


let winner = (value, randomValue) => {
    if(randomValue === value)
    {
        textBox.style.backgroundColor = "#A3B087";
        textBox.innerText = "It's a DRAW";
        textBox.style.color = "black";
    }
    else if((value === "rock" && randomValue === "scissor") ||
    (value === "paper" && randomValue === "rock") ||
    (value === "scissor" && randomValue === "paper"))
    {
        user.innerText++ ;
        textBox.style.backgroundColor = "green";
        textBox.style.color = "white";
        textBox.innerText = "User Wins !";
    }
    else
    {
        comp.innerText++ ;
        textBox.style.backgroundColor = "darkred";
        textBox.style.color = "white";
        textBox.innerText = "Computer Wins !";
    }
};


let reset = document.querySelector("#reset");
reset.addEventListener("mouseover", () => {
    reset.style.backgroundColor = "#889768";
    //reset.style.boxShadow = "inset 0 0 1rem rgba(85, 83, 83, 0.9)";
});
reset.addEventListener("mouseout", () => {
    reset.style.backgroundColor = "#A3B087";
});
reset.addEventListener("click", () => {
    user.innerText = 0;
    comp.innerText = 0;
    textBox.innerText = "Pick Your Move";
    textBox.style.backgroundColor = "#A3B087"; 
    textBox.style.color = "black";
});