$(document).ready(function() {

    // moment.js code to display the date and time of the week
    var currentDay = moment().format('MMMM Do YYYY');
    var currentTime = moment().format('h:mm:ss a');
    var currentDayOfWeek = moment().format("dddd");
    var currentInfo = currentDayOfWeek + ", " + currentDay;
    $("#currentDay").text(currentInfo);
    $("#currentTime").text(currentTime);
    var currentHour = moment().hours();

    // for loop for iterating through all hours to declare past , present and future.
    for ( i = 0; i < 9; i++ ){
        if ($(".hour").eq(i).data("hour") === currentHour){
            $("textarea").eq(i).addClass("present");
        }   else if ($(".hour").eq(i).data("hour") < currentHour){
            $("textarea").eq(i).addClass("past");
        } else {
            $("textarea").eq(i).addClass("future");
        }
    }
    })
    