var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PokemonType;
(function (PokemonType) {
    PokemonType[PokemonType["Fire"] = 0] = "Fire";
    PokemonType[PokemonType["Water"] = 1] = "Water";
    PokemonType[PokemonType["Grass"] = 2] = "Grass";
})(PokemonType || (PokemonType = {}));
var Weaknesses = {
    0: PokemonType.Water,
    1: PokemonType.Grass,
    2: PokemonType.Fire
};
var Pokemon = /** @class */ (function () {
    function Pokemon(name, type, baseHP, attacks) {
        this.attacks = {};
        this.nickname = name;
        this.type = type;
        this.currentHealth = baseHP;
        this.attacks = attacks;
    }
    Pokemon.prototype.toString = function () {
        return this.name ? "".concat(this.nickname, " the ").concat(this.name) : "".concat(this.nickname);
    };
    Pokemon.prototype.getAttackMultiplier = function (moveType, targetType) {
        var userMultiplier = moveType === this.type ? 1.5 : 1;
        if (Weaknesses[targetType] === moveType) {
            return userMultiplier * 2;
        }
        if (Weaknesses[moveType] === targetType) {
            return userMultiplier * 0.5;
        }
        return userMultiplier * 1;
    };
    Pokemon.prototype.isDefeated = function () {
        return this.currentHealth <= 0;
    };
    Pokemon.prototype.winFight = function () {
        console.log("".concat(this.nickname, " the ").concat(this.name, " has won the fight!"));
    };
    Pokemon.prototype.attack = function (moveName, target) {
        if (!this.attacks[moveName]) {
            return false;
        }
        console.log("".concat(this.toString(), " attacks ").concat(target.toString(), " with ").concat(moveName));
        var _a = this.attacks[moveName], power = _a.power, moveType = _a.type;
        var attackMultiplier = this.getAttackMultiplier(moveType, target.type);
        target.takeDamage(power * attackMultiplier);
        console.log("The attack leaves ".concat(target.toString(), " with ").concat(target.currentHealth, "HP"));
        if (target.isDefeated()) {
            this.winFight();
        }
        return true;
    };
    Pokemon.prototype.takeDamage = function (damage) {
        this.currentHealth -= damage;
    };
    return Pokemon;
}());
var Charizard = /** @class */ (function (_super) {
    __extends(Charizard, _super);
    function Charizard(nickname, moveSet) {
        var _this = _super.call(this, nickname, PokemonType.Fire, 300, moveSet) || this;
        _this.name = 'Charizard';
        return _this;
    }
    return Charizard;
}(Pokemon));
var charizard = new Charizard('Pooky', { fireBlast: { type: PokemonType.Fire, power: 150 } });
var venusaur = new Pokemon('Venusaur', PokemonType.Grass, 500, { razorLeaf: { type: PokemonType.Grass, power: 50 } });
charizard.attack('fireBlast', venusaur);
venusaur.attack('razorLeaf', charizard);
charizard.attack('fireBlast', venusaur);
