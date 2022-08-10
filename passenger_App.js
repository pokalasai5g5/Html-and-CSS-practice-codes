


let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count=0;
function increment()
{
    count = count + 1;
    countEl.innerText = count;
}

function decrement(){
    count = count-1;
    countEl.innerText= count;
}
function save(){
    let countstr = count + "-";
    saveEl.innerText += countstr; // we can use "saveEL.textContent" alternative to innerText 
    countEl.innerText = 0; // To set counter value ZERO
    count = 0;
}
 document.getElementById("demo").innerHTML = "Welcome to train passenger counter App ";
