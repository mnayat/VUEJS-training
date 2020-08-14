const Character = [
     {
        classType: 1,
        characterName: 'Saber',
        characterImg : require('../assets/saber.png'),
        health: 300,
        mana: 100,
        skills : [
            {
                _id: 1,
                name: "Basic Attack",
                classId: 1,
                damage: 10,
                target: "enemy",
                cost: 0,
                type: "P"
            },
            {
                _id: 2,
                name: "Focus",
                classId: 1,
                damage: 0,
                target: "self",
                cost: 0,
                type: "P"
            }
          
        ]
    },
    {
        classType: 2,
        characterName: 'Archer',
        characterImg : require('../assets/archer.png'),
        health: 300,
        mana: 100,
        skills : [
            {
                _id: 1,
                name: "Basic Attack",
                classId: 2,
                damage: 10,
                target: "enemy",
                cost: 0,
                type: "P"
            },
            {
                _id: 2,
                name: "Focus",
                classId: 2,
                damage: 0,
                target: "self",
                cost: 0,
                type: "P"
            }
        ]
    },
    {
        classType: 3,
        characterName: 'Lancer',
        characterImg : require('../assets/lancer.png'),
        health: 300,
        mana: 100,
        skills : [
            {
                _id: 1,
                name: "Basic Attack",
                classId: 3,
                damage: 10,
                target: "enemy",
                cost: 0,
                type: "P"
            },
            {
                _id: 2,
                name: "Focus",
                classId: 3,
                damage: 0,
                target: "self",
                cost: 0,
                type: "P"
            },
          
        ]
    },
    {
        classType: 4,
        characterName: 'Berserker',
        characterImg : require('../assets/berserker.png'),
        health: 300,
        mana: 100,
        skills : [
            {
                _id: 1,
                name: "Basic Attack",
                classId: 4,
                damage: 10,
                target: "enemy",
                cost: 0,
                type: "P"
            },
            {
                _id: 2,
                name: "Focus",
                classId: 4,
                damage: 0,
                target: "self",
                cost: 0,
                type: "P"
            }
          
        ]
    },
    {
        classType: 5,
        characterName: 'Caster',
        characterImg : require('../assets/caster.png'),
        health: 300,
        mana: 100,
        skills : [
            {
                _id: 1,
                name: "Basic Attack",
                classId: 5,
                damage: 10,
                target: "enemy",
                cost: 0,
                type: "P"
            },
            {
                _id: 2,
                name: "Focus",
                classId: 5,
                damage: 0,
                target: "self",
                cost: 0,
                type: "P"
            }
          
        ]
    },
]
export default Character