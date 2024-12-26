let sec1 = document.querySelector(".sectione1")
let sec2 = document.querySelector(".sectione2")
let btnin = document.querySelector(".in")
let btnup = document.querySelector(".up")


function opensign1 (){
sec1.style.display="flex"
}

function opensign2 (){
    sec2.style.display="flex"
}

function closesign (){
    sec2.style.display="none"
    sec1.style.display="none"

}

btnin.addEventListener("click", opensign2)
btnup.addEventListener("click", opensign1)

