var age = 28;
var myName = "Luis";
var luisGeneralInfo = {
    parents: ["Martha", "Luis"],
    sisters: ["Maria", "Alexca", "Yeti"],
    hobbies: ["Listening to music", "Playing videogames"],
    stuffHeLikes: ["Apples", 7, "Walking", "Working out", 1995],
    maritalStatus: false
};
// TYPESCRIPT ADDITIONS
//A tuple is likely an array with two values a string and a number
//we can let typesscrip know that we'll use it in the following way
var tuple = [1, "person"];
//"enum" allows to enumerate a list of any things you need to
var LuisFriends;
(function (LuisFriends) {
    LuisFriends[LuisFriends["Javier"] = 0] = "Javier";
    LuisFriends[LuisFriends["Neil"] = 1] = "Neil";
    LuisFriends[LuisFriends["Willinton"] = 2] = "Willinton";
})(LuisFriends || (LuisFriends = {}));
console.log(LuisFriends);
