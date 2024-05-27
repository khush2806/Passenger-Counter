let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")               
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}
function save(){
    let  savedValue = count + " - "
    saveEl.textContent += savedValue
    count = 0
    countEl.textContent = 0


}


