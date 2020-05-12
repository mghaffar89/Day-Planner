//var d = new Date();
//document.getElementById("currentDay").innerHTML = d; - this shows a weird format, use as last resort
//var currentTime = moment().hours();
//using moment method
moment(Date);
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf("hour");

//Compare Current time to hour slots
// Attempt 1
var timeBlock = document.getElementsByClassName("time-block");

/* function compareTime() {
  if (currentTime === attr("data-hour")) {
    $(data("hour").addclass(".present"));
  } else if (currentTime < attr("data-hour")) {
    $(data("hour").addclass(".future")); 
  } else (currentTime > attr("data-hour")) {
    $(data("hour").addclass(".past"));
  }
} */

//Attempt 2
function compareTime() {
var currentTime = moment().hours();
$(".data-hour").each(function () {
var hourEl = $(this).attr(data-hour);
    var hourDay = hourEl.substring(5, hourEl.length);
    var intHourDay = parseInt(hourDay); 
    var intCurrentHours = parseInt(currentHours);
if (parseInt(intHourDay)) < parseInt(intCurrentHours)) {
      $(this).addclass("past");
      $(this).removeclass("future");
      $(this).removeclass("present");
    } // end of int
    }) //.each function end 
}; 







//Local Storage & Save feature
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
  var dataHour = localStorage.getItem(x[i]);
  $(".form" + x[i]).val(dataHour);
}
$(".saveBtn").click(function () {
  event.preventDefault();
  var formValue = $(this).siblings(".form-control").val();
  var listItem = $(this).parent().data("hour");

  localStorage.setItem(listItem, formValue);
});
