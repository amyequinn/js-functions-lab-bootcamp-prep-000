/*Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `Happy ${holiday}, ${name}!`

Write a function named holidayCountdown. This function should accept two parameters, the holiday name and number of days till that holiday. The function should return the string `It's ${days} days until ${holiday}!`*/
function happyHolidays() {
 return ("Happy holidays!");
}

function happyHolidaysTo(name){
  var name="you";
  return (`Happy holidays, ${name}!`);
}

function happyHolidayTo("holiday", "name"){
  var holiday ="tenerife";
  return (`Happy ${holiday}, ${name}!`);
}

function holidayCountdown("holiday", "days") {
  var days=10;
  return (`It's ${days} days until ${holiday}!);
}
