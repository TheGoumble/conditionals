const date = new Date()
console.log(date)

const hour = date.getHours()
console.log(hour)

let message = `good ${hour >= 12 ? 'afternoon' : 'morning'} class`

let greeting // global scope

if(hour >= 12){
    greeting = 'afternoon'
}else{
    greeting = 'morning'
}

let message2 = `good ${greeting} class`

console.log(message)
console.log(message2)