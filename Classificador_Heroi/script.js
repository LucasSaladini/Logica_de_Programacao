let heroName = "Lucas"
let xpAmount = 10002
let levelName = ""

switch (true) {
    case xpAmount < 1000:
        levelName = "Ferro"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 2000:
        levelName = "Bronze"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 5000:
        levelName = "Prata"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 7000:
        levelName = "Ouro"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 8000:
        levelName = "Platina"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 9000:
        levelName = "Ascendente"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount < 10000:
        levelName = "Imortal"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    case xpAmount >= 10001:
        levelName = "Radiante"
        console.log("O Herói de nome " + heroName + " está no nível " + levelName)
        break
    default:
        console.log("Informe as variáveis")
}