let fruit = "graps"
fruit = "pinapple"

switch (fruit) {
  case "pear":
    console.log("nice love those pears")
    break

  case "pineapple":
    fruit = "strawberry"
    console.log("good for piña colada", "with ", fruit)
    break

  default:
    console.log("out of", fruit)
}

let cost = 8.4
cost = 6

switch (cost) {
  case 6:
    console.log("just right price")
    break

  default:
    console.log("too expensice")
}
