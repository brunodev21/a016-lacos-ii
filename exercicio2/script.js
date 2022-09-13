let numero = Number (prompt("Digite um número :"))
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in num){
    console.log(` ${numero} * ${num[i]} = ${numero*num[i]}`)
}