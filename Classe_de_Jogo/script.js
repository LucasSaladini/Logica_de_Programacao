class hero {
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }

    atacar() {
        let attackType = ""

        if(this.heroType === "mago") {
            attackType = "magia"
        } else if (this.heroType === "guerreiro") {
            attackType = "espada"
        } else if (this.heroType === "monge") {
            attackType = "artes marciais"
        } else {
            attackType = "shuriken"
        }

        console.log(`o ${this.heroType} atacou usando ${attackType}`)
    }
}

let heroiMago = new hero("","", "mago")
heroiMago.atacar()

let heroiGuerreiro = new hero("","", "guerreiro")
heroiGuerreiro.atacar()

let heroiMonge = new hero("","", "monge")
heroiMonge.atacar()

let heroiNinja = new hero("","", "ninja")
heroiNinja.atacar()