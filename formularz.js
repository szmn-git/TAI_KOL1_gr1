const email = document.querySelector('.email-field');
const topic = document.querySelector('.topic-field');
const text = document.querySelector('.text-field')
const table = document.querySelector('.result')

let clicks = 0;

const emailInput = document.querySelector('.email-input');
const topicInput = document.querySelector('.topic-input');
const textInput = document.querySelector('.text-input')

function send(){
    email.innerText = emailInput.value;
    topic.innerText = topicInput.value;
    text.innerText = textInput.value;
    table.style.display = "block"
    clicks += 1
    document.getElementById("clicks").innerHTML = clicks;
}

function clear(){
    email.innerText = "";
    topic.innerText = "";
    text.innerText = "";
    table.style.display = "none"
}