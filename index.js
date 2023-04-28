let count = 0
let inc = document.getElementById("count-el")

function increment(){
    count += 1
    inc.textContent = count
}

function decrement(){
    if(count > 0)
        count -= 1
    inc.textContent = count
}

let saveEl = document.getElementById("save-el")
let holecount = 1
function save(){
    if(holecount > 1) saveEl.textContent += ", "
    saveEl.textContent += "Hole " + holecount + ": " + count
    holecount++
    count = 0
    inc.textContent = 0
}