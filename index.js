$(document).ready(function() {

    // moment.js code to display the date and time of the week
    var currentDay = moment().format('MMMM Do YYYY');
    var currentTime = moment().format('h:mm:ss a');
    var currentDayOfWeek = moment().format("dddd");
    var currentInfo = currentDayOfWeek + ", " + currentDay;
    $("#currentDay").text(currentInfo);
    $("#currentTime").text(currentTime);
})