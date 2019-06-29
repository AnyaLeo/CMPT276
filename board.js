$(document).ready(function(){
  var deleteStatus = false;

  //add new text note on click
  $('#add').click(function(){
    deleteStatus = false;
    var newDiv = '<div class="movable" contenteditable="true">New note</div>';
    $("#notesContainer").append(newDiv);
    $(".movable").draggable();
  });

  $('#addImage').click(function(){
    deleteStatus = false;
    $('#imgForm').toggle();
  });

  $('#imgLinkInput').click(function(){
    deleteStatus = false;
    var imgSrc = $('input[name=imgLink]').val();

    $('#imgForm').trigger("reset");
    var newDiv = '<div class="movable"><img class="resizableImg" src="' + imgSrc + '" alt="Surprised Pikachu"></div>';
    $("#notesContainer").append(newDiv);
    $('.movable').draggable();
    $('.resizableImg').resizable();
  });

  //allow user to delete notes
  $('#delete').click(function(){
    deleteStatus = true;
  });

  $('#notesContainer').click(function(e){
    if (deleteStatus) {
      $(e.target).remove();
    }
  });

});
