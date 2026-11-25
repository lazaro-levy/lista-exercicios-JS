// --> DECLARAÇÃO DE VARIÁVEIS
// Megabits por GigaByte
const MBIT_PER_GB = 8192
// Tamanho do arquivo
let file_size = Number(prompt("Digite o tamanho do arquivo (GB):"))
// Velocidade da rede
let net_speed = Number(prompt("Digite a velocidade da Internet (Mbps):"))
// Tempo de transferência em segundos
let transfer_time_seconds = (file_size * MBIT_PER_GB) / net_speed
// Tempo de transferência em minutos
let transfer_time_minutes = transfer_time_seconds / 60

// Saída final
console.log("---------------------STATUS---------------------")
console.log(`Tamanho do arquivo: ${file_size} GB.`)
console.log(`Velocidade da rede: ${net_speed} Mbps`)
console.log(`Tempo estimado de transferência:`)
console.log(` - ${transfer_time_seconds.toFixed(2)} segundos.`)
console.log(` - ${transfer_time_minutes.toFixed(2)} minutos.`)
console.log("------------------------------------------------")