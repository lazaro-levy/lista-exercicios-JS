// --> DECLARAÇÃO DE VARIÁVEIS
// Valor da conta
let val_account = Number(prompt("Digite o valor da conta (R$):"))
// Confirmação da taxa de serviço
let acc_service = confirm("Taxa de serviço (10%) incluída?")
// Quantidade de pessoas para o pagamento da conta total
let quant_people = parseInt(prompt("Digite a quantidade de pessoas:"))
// Valor da conta individual
let val_individual = 0
// Valor da taxa de serviço
let val_service = 0
// Valor total da conta
let val_total = 0

// Começo da saída final
console.log("---------------STATUS---------------")

// Se a taxa de serviço está incluída
if (acc_service){
    val_service = val_account * 0.1
    console.log(`Taxa de serviço (10%): R$ ${val_service.toFixed(2)}.`)
}
// Se a taxa de serviço não está incluída
else {
    console.log("Taxa de serviço (10%): Não incluída.")
}

// Cálculo do valor total da conta
val_total = val_account + val_service
// Cálculo do valor da conta individual
val_individual = val_total / quant_people
console.log(`Valor total: R$ ${val_total.toFixed(2)}.`)
console.log(`Valor da conta individual: R$ ${val_individual.toFixed(2)}.`)
console.log("------------------------------------")