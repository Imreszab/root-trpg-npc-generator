
export type NpcBase = {
    name: string,
    race: NData,
    age : NData,
    gender : NData,
    faction : NData
  }
export type NpcStats = {
    injury : number,
    exhaustion : number,
    moral: number,
}
export type NpcTracker = {
    injury : number,
    exhaustion : number,
    wear : number,
    moral: number,
    damageInjury : number,
    damageExhaustion : number
}

export type Equipment = {
    weaponName: string,
    armorName: string,
}

export type Weapon = {
    id : number,
    name : string,
    injury : number,
    exhaustion : number
}

export type Armor = {
    id : number,
    name : string,
    wear: number,
}

export type NData = {
    id : number,
    name : string
}

export type Npc = {
    name: string,
    race: NData,
    age : NData,
    gender : NData,
    faction : NData,
    weapon : Weapon,
    armor : Armor,
    injury : number,
    exhaustion : number,
    moral: number
}

/*export type Npc = {
    npcBase : NpcBase,
    weapon : Weapon,
    armor : Armor
    npcStats : NpcStats
    
}*/

//base npc to load on start

/*export const starterNpc : Npc =
    {
        npcBase :{
        name: "Béla",
        race: {
            id: 5,
            name: "Racoon"
        },
        age: {
            id: 4,
            name: "Elder"
        },
            gender: {
            id: 1,
            name: "Male"
        },
        faction: {
            id: 4,
            name: "Local Denizen"
        },
    },
        weapon: {
            id: 4,
            name: "Greatsword",
            injury: 2,
            exhaustion: 0
        },
        armor: {
            id: 1,
            name: "Cloak",
            wear: 1
        },
        npcStats: {
            injury: 3,
            exhaustion: 3,
            moral: 4
        }
      }*/

export const starterNpc : Npc = {
    name: "Béla",
    race: {
      id: 1,
      name: "Rabbit"
    },
    age: {
      id: 3,
      name: "MiddleAge"
    },
    gender: {
      id: 3,
      name: "Other"
    },
    faction: {
      id: 4,
      name: "Local Denizen"
    },
    weapon: {
      id: 4,
      name: "Greatsword",
      injury: 2,
      exhaustion: 0
    },
    armor: {
      id: 3,
      name: "Leather Vest",
      wear: 2
    },
    injury: 1,
    exhaustion: 1,
    moral: 2
  }

// ContentProps for components

export type StatProps = {
	stats: NpcStats,
	wear: number,
};
export type SheetProps = {
	pageName: string,
	npc: Npc,
	handleGenerate: Function,
    handleSave: Function,
};

export type TrackerProps = {
	tracker: NpcTracker
};
export type BasicInfoProps = { basicInfo: NpcBase, handleEdit : Function };
