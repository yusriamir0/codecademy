const weekdays = 5;
const weekend = 2;

let weekdaysHour = 2.5;
let weekendHour = 6.5;

function totalWork() {
    return weekdays * weekdaysHour + weekend * weekendHour;
}

console.log(totalWork());
