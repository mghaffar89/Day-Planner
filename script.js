//var d = new Date();
//document.getElementById("currentDay").innerHTML = d; - this shows a weird format, use as last resort
//var currentTime = moment().hours();
//using moment method
moment(Date);
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf("hour");

//Compare Current time to hour slots

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

//Local Storage & Save feature
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
  var dataHour = localStorage.getItem(x[i]);
  $(".form" + x[i]).val(dataHour);
}
$(".saveBtn").click(function () {
  event.preventDefault();
  var formValue = $(this).siblings(".form-control").val();
  console.log("This worked");
  var listItem = $(this).parent().data("hour");

  localStorage.setItem(listItem, formValue);
});
