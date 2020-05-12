//var d = new Date();
//var currentTime = moment().hours();
//document.getElementById("currentDay").innerHTML = d;
//using moment method
moment(Date);
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
// Moment Current time
var currentTime = moment();
currentTime = currentTime.startOf("hour");

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
