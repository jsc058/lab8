// Your code goes here
$(document).ready(function() {
$('#taskForm').submit(function(e) {
    // Prevents default submit + reload (we only want the submit part)
    e.preventDefault();

    var taskName = $('#addTask').val();

    // Send the POST request
    $.post('addTask', { taskName: taskName }, postCallback);
  });
});

function postCallback(res) {
  $('.taskList').append('
  ' + res + '
'); // Add to the list

 $('#addTask').val(''); // Clear form
}
