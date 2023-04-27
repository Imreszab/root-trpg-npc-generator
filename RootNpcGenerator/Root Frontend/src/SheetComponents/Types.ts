
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
    Id : number
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

export const starterNpc : Npc = {
    Id: 0,
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
    handleEdit: Function
};
export type SheetProps = {
	props : NpcSheetProps
};

export type NpcSheetProps = {
  pageName: string,
	npc: Npc,
  npcs? : Npc[],
	handleFunction: Function,
    handleSave: Function
}

export type TrackerProps = {
	tracker: NpcTracker
};
export type BasicInfoProps = { basicInfo: NpcBase, handleEdit : Function };


/*export type RandomMenuProps = {
  handleGenerate: Function;
	pageName: string;
	handleSave: Function;
}*/
