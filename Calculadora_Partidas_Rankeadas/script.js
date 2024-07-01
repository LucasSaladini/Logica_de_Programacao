let victories = 110
let defeats = 5

function calculateGameBalance(victories, defeats) {
    balance = victories - defeats
    return balance
}

let calculatedBalance = calculateGameBalance(victories, defeats)

switch (true) {
    case calculatedBalance < 10:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Ferro")
        break
    case calculatedBalance < 21:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Bronze")
        break
    case calculatedBalance < 51:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Prata")
        break
    case calculatedBalance < 81:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Ouro")
        break
    case calculatedBalance < 91:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Diamante")
        break
    case calculatedBalance <= 100:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Lendário")
        break
    case calculatedBalance >= 101:
        console.log("O Herói tem de saldo de " + calculatedBalance + " está no nível Imortal")
        break
    default:
        console.log("Informe as variáveis")
}