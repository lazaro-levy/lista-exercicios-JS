// --> DECLARAÇÃO DE VARIÁVEIS
// Saldo atual do cartão
let val_card = Number(prompt("Digite o saldo do cartão:"))
// Saldo restante do cartão
let val_remaining = 0
// Quantidade de viagens possíveis
let quant_trip = 0

// Começo da saída final
console.log("---------------STATUS---------------")
console.log(`Saldo atual: R$ ${val_card.toFixed(2)}.`)
console.log("Tarifa: R$ 5.00.")
// Se o saldo do cartão for menor que R$ 5.00, então não é possível viajar
if (val_card < 5){
    console.log("Quantidade de viagens: 0.")
    console.log(`Saldo restante: R$ ${val_card.toFixed(2)}.`)
}
// Se o saldo do cartão for maior ou igual a R$ 5.00, é possível viajar
else{
    val_remaining = val_card % 5
    quant_trip = Math.trunc(val_card / 5)
    console.log(`Quantidade de viagens: ${quant_trip}.`)
    console.log(`Saldo restante: R$ ${val_remaining.toFixed(2)}.`)
}
console.log("------------------------------------")