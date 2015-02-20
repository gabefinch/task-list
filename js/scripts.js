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

    $('#lists').append('<h5><li class="list">' + newList.name + '</li></h5>')

    $('.list').last().click(function() {
      activeList = newList;
      $('#list-name').text(newList.name);
      $('#tasks').empty();
      newList.tasks.forEach(function(task) {
        $('#tasks').append('<li class="task"><h5>' + newTask.name + ' <span class="delete"><small>delete</small></span></h5></li>');
      });
      $('.task').hover(function(event) {
        $(event.target).children().show();
      }, function(){
        $('span.delete').hide();
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
    $('#tasks').append('<li class="task"><h5>' + newTask.name + ' <span class="delete"><small>delete</small></span></h5></li>' );
    $('.task').hover(function(event) {
      $(event.target).children().show();
    }, function(){
      $('span.delete').hide();
    });

    $(".delete").click(function() {
      var stringToFind = $(this).parent().text().slice(0, -7);
      for (var i = 0; i < activeList.tasks.length; i++) {
        if (activeList.tasks[i].name === stringToFind) {
          activeList.tasks.splice(i,1);
          debugger;

        }
      }
      $('#tasks').empty();
      activeList.tasks.forEach(function(task) {
        $('#tasks').append('<li class="task"><h5>' + newTask.name + ' <span class="delete"><small>delete</small></span></h5></li>');
      });
    });
  });

});
