let a = prompt("enter the first number")
let c = prompt("enter the secod number")
let b = prompt("enter the operation")

let r = Math.random()
console.log(r)
let o = {
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"+"
}

if(r>0.1){
   alert(`the result is${eval(`${a} ${b} ${c}`)}`)
}
else{
    let l = o[b]
    alert(`yor result is ${eval(`${a}${l}${c}`)}`)
}