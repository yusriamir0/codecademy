// const monsterFactory = (name, age, energySource, catchPhrase) => {
//     return {
//         name,
//         age,
//         energySource,
//         scare() {
//             console.log(catchPhrase);
//         },
//     };
// };
// const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
// console.log(ghost.age);

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("Beep Boop");
        },
    };
};

const tincan = robotFactory("P-500", true);
console.log(tincan.model);
console.log(tincan.mobile);
tincan.beep();
