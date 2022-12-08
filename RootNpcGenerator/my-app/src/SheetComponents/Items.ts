import { Weapon, Armor } from "./Types";

export const  weapons : Readonly<Weapon[]> =[
    {   name : "Paw",
    injury : 0,
    exhaustion : 2
    },   
    {   name : "Dagger",
        injury : 1,
        exhaustion : 0
    },
    {   name : "Sword",
        injury : 2,
        exhaustion : 0
    },
    {   name : "Greatsword",
        injury : 3,
        exhaustion : 0
    },
    {   name : "Greathammer",
        injury : 1,
        exhaustion : 1
    },
    {   name : "Crossbow",
        injury : 1,
        exhaustion : 0
    },

];

export const armors : Readonly<Armor[]> =[
    {
        name: "Cloak",
        wear: 1
    },
    {
        name: "Fancy Clothes",
        wear: 0
    },
    {
        name: "Leather Vest",
        wear: 2
    },
    {
        name: "Chainmail",
        wear: 3
    },
    {
        name: "Plate Armor",
        wear: 4
    },
];

export const names: Readonly<string[]> = [
"Leo Woods",
"Andre Flores",
"Alec Simmons",
"Osman Lane",
'India Jones',
"Josef Carr",
"Jude Fulton",
"Anaya Harper",
"Hugh Figueroa",
"Anais Hodges",
]