
export type NpcBase = {
    name: string,
    race: Race,
    age : Age,
    gender : Gender,
    faction : Faction
  }
export type NpcStats = {
    injury : number,
    exhaustion : number,
    wear : number,
    moral: number,
    damageInjury : number,
    damageExhaustion : number,
}
export type Equipment = {
    weaponName: string,
    armorName: string,
}

export type Weapon = {
    name :string,
    injury : number,
    exhaustion : number
}

export type Armor = {
    name : string,
    wear: number,
}

export enum Faction {
    Marquisate = "Marquisate",
    EyrieDynasty = "Eyrie Dynasty",
    WAlliance = "Woodland Alliance",
    Local = "Local Denizen",
    Cult = "Lizard Cult"
    
}

export enum Gender {
    Male = "He",
    Female = "She",
    Other = "They"
}

export enum Race {
    Rabbit = "Rabbit",
    Mouse = "Mouse",
    Fox = "Fox",
    Cat = "Cat",
    Bird = "Bird",
}
export enum Age {
    Child = "Child",
    YoungAdult = "YoungAdult",
    MiddleAge = "MiddleAge",
    Elder = "Elder"
}