var List = {name: ""};
var Task = {name: "", dueDate: undefined}

$(document).ready(function() {
var activeList = null;
  $("#create-list").submit(function(event) {
    event.preventDefault();
    var listName = $('#new-list-name').val();
    $('#new-list-name').val("");
    var newList = Object.create(List);
    newList.name = listName;
    newList.tasks = []

    $('#lists').append('<li class="list">' + newList.name + '</li>')

    $('.list').last().click(function() {
      activeList = newList;
      $('#list-name').text(newList.name);
      $('#tasks').empty();
      newList.tasks.forEach(function(task) {
        $('#tasks').append('<li>' + task.name + '</li>');
      });
      $('#list-detail').show();
    });

    $('#list-display').show();
  });

  $('#create-task').submit(function(event) {
    event.preventDefault();
    var taskName = $('#new-task-name').val();
    $('#new-task-name').val("");
    var newTask = Object.create(Task);
    newTask.name = taskName;
    activeList.tasks.push(newTask);
    $('#tasks').append('<li>' + newTask.name + '</li>');
  });
});
