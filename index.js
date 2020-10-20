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
    
    // function to save the notes.
    $("i").click(saveNote);
    // calling showNote function will show all the save items when the browser loads.
    showNote();

    function saveNote(){
        for (i = 0; i<9; i++){
            var note = $("textarea").eq(i).val();
            var time = $(".hour").eq(i).data("hour");
            localStorage.setItem(time, note);
        }
    }
    // function to show save notes.
    function showNote (){
        for (i = 0; i<9; i++){
            var time = $(".hour").eq(i).data("hour");
            var notes = localStorage.getItem(time)
            $("textarea").eq(i).text(notes);   
        }
    }