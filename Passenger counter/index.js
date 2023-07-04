//document.getElementById("count-el").innerText=5
let count=0;
//count = 3
let saveel=document.getElementById("save-el");
//console.log(count);
let countEl = document.getElementById("count-el");

function increment(){
    console.log("the button is clicked");
    count +=1;
    countEl.innerText=count;

    console.log(count);

}

function save() {
    let countStr=count+" - ";
    saveel.textContent += countStr;
    count =0;
    countEl.textContent =0;
    console.log(count);
}
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}