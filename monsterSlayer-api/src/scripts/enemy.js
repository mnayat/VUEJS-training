const Enemy = [
    {
       classId: 0,
       characterName: 'Enemy',
       characterImg :  '',
       health: 300,
       mana: 100,
       skills : [
        {
            id: 1,
            name: "Basic Attack",
            classId: 0,
            damage: 10,
            target: "player",
            cost: 0,
            type: "P"
        },
        {
            id: 2,
            name: "Focus",
            classId: 0,
            damage: 0,
            target: "self",
            cost: 0,
            type: "P"
        },
        {
            id: 3,
            name: "Slash",
            classId: 0,
            damage: 100,
            target: "player",
            cost: 50,
            type: "P"
        },
        {
            id: 4,
            name: "Back Kick",
            classId: 0,
            damage: 130,
            target: "player",
            cost: 60,
            type: "P"
        },
        {
            id: 5,
            name: "Upper Kick",
            classId: 0,
            damage: 142,
            target: "player",
            cost: 80,
            type: "P"
        }

      
    ]
},
  
]
export default Enemy