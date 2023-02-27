// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  // code that interacts with the DOM goes here

    // var rootEl = $('#root');

  // const currentDay = dayjs();
  // const currentDay = dayjs().format('dddd');
  var today = dayjs().format('dddd, MMMM D');
  var currentDayElement = document.getElementById('currentDay');
  currentDayElement.textContent = today;

  $(function () {

    
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // const saveBtns = document.querySelectorAll(".saveBtn");

  // saveBtns.forEach(function(btn) {
  //   btn.addEventListener("click", function() {
  //     console.log("button clicked");
  //   });
  // });

 // Add click event listener to all save buttons
 $(".saveBtn").on("click", function() {
  // Get the value of the textarea element
  var text = $(this).siblings(".description").val();
  // Get the ID of the parent row element
  var id = $(this).parent().attr("id");
  // Save the text to local storage using the ID as the key
  localStorage.setItem(id, text);
});

// Load saved data from local storage
$(".time-block").each(function() {
  // Get the ID of the row element
  var id = $(this).attr("id");
  // Get the saved text from local storage using the ID as the key
  var text = localStorage.getItem(id);
  // If there is saved text, update the textarea element with it
  if (text !== null) {
    $(this).find(".description").val(text);
  }
});
 
// Get the current hour using day.js
var currentHour = dayjs().hour();

// Loop through each element with the class "time-block"
$(".time-block").each(function() {
  // Get the hour of the current element from its ID
  var elementHour = parseInt($(this).attr("id").split("-")[1]);

  // Compare the current hour with the element hour
  if (currentHour < elementHour) {
    $(this).addClass("future");
  } else if (currentHour === elementHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

// Get the current hour using day.js
var currentHour = dayjs().hour();

// loop over the hours from 8AM to 5PM
for (var hour = 8; hour <= 17; hour++) {
  // create a variable for the container div with the corresponding ID
  var container = $('#hour-' + hour);

  // check if the current hour is greater than the hour for this container
  if (currentHour > hour) {
    container.addClass('past');
  }
  // check if the current hour is equal to the hour for this container
  else if (currentHour === hour) {
    container.addClass('present');
  }
  // otherwise, the current hour must be less than the hour for this container
  else {
    container.addClass('future');
  }
}


// // Select the container element using its ID
// var container = $('#hour-11');

// // Get the hour value from the container's ID
// var containerHour = parseInt(container.attr('id').split('-')[1]);

// // Compare the current hour with the container hour
// if (containerHour < currentHour) {
//   // If the container hour is in the past, add the 'past' class
//   container.addClass('past');
// } else if (containerHour === currentHour) {
//   // If the container hour is the same as the current hour, add the 'present' class
//   container.addClass('present');
// } else {
//   // If the container hour is in the future, add the 'future' class
//   container.addClass('future');
// }


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  //
  // TODO: Add code to display the current date in the header of the page.
  });

});