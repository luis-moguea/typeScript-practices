const age: number = 28
const myName: string = "Luis"

const luisGeneralInfo: {
    parents: string[],
    sisters: string[],
    hobbies: string[],
    stuffHeLikes: any[]
    maritalStatus: boolean

} = {
    parents:  ["Martha", "Luis"],
    sisters: ["Maria", "Alexca", "Yeti"],
    hobbies: ["Listening to music", "Playing videogames"],
    stuffHeLikes: ["Apples", 7, "Walking", "Working out", 1995],
    maritalStatus: false
}

// TYPESCRIPT ADDITIONS

//A tuple is likely an array with two values a string and a number
//we can let typesscrip know that we'll use it in the following way

const tuple: [number, string] = [1, "person"]


//"enum" allows to enumerate a list of any things you need to

enum LuisFriends { Javier, Neil, Willinton}

