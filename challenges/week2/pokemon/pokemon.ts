enum PokemonType {
  Fire,
  Water,
  Grass,
}

const Weaknesses: {[idx: number]: PokemonType} = {
  0: PokemonType.Water,
  1: PokemonType.Grass,
  2: PokemonType.Fire,
}

type PokemonMove = {
  type: PokemonType,
  power: number
}

type PokemonMoveset = {[k: string]: PokemonMove}

class Pokemon {
  name: string
  nickname: string
  type: PokemonType
  currentHealth: number
  attacks: PokemonMoveset = {}

  constructor(name: string, type: PokemonType, baseHP: number, attacks: PokemonMoveset) {
    this.nickname = name
    this.type = type
    this.currentHealth = baseHP
    this.attacks = attacks
  }

  toString(): string {
    return this.name ? `${this.nickname} the ${this.name}` : `${this.nickname}`
  }

  getAttackMultiplier(moveType: PokemonType, targetType: PokemonType): number {
    const userMultiplier = moveType === this.type ? 1.5 : 1
    if (Weaknesses[targetType] === moveType) {
      return userMultiplier * 2
    }

    if (Weaknesses[moveType] === targetType) {
      return userMultiplier * 0.5
    }

    return userMultiplier * 1
  }

  isDefeated(): boolean {
    return this.currentHealth <= 0
  }

  winFight(): void {
    console.log(`${this.nickname} the ${this.name} has won the fight!`)
  }

  attack(moveName: string, target: Pokemon): boolean {
    if (!this.attacks[moveName]) {
      return false
    }

    console.log(`${this.toString()} attacks ${target.toString()} with ${moveName}`)
    const { power, type: moveType } = this.attacks[moveName]
    const attackMultiplier = this.getAttackMultiplier(moveType, target.type)
    target.takeDamage(power * attackMultiplier)

    console.log(`The attack leaves ${target.toString()} with ${target.currentHealth}HP`)
    if (target.isDefeated()) {
      this.winFight()
    }

    return true
  }

  takeDamage(damage: number) {
    this.currentHealth -= damage
  }
}

class Charizard extends Pokemon {
  name = 'Charizard'
  constructor(nickname: string, moveSet: PokemonMoveset) {
    super(nickname, PokemonType.Fire, 300, moveSet)
  }
}

const charizard = new Charizard(
  'Pooky',
  { fireBlast: { type: PokemonType.Fire, power: 150 } },
)
const venusaur = new Pokemon(
  'Venusaur',
  PokemonType.Grass,
  500,
  { razorLeaf: { type: PokemonType.Grass, power: 50 } },
)

charizard.attack('fireBlast', venusaur)
venusaur.attack('razorLeaf', charizard)
charizard.attack('fireBlast', venusaur)
