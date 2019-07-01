$(document).ready(function(){
  var deleteStatus = false;

  //add new text note on click
  $('#add').click(function(){
    deleteStatus = false;
    var newDiv = '<div class="movable resizable" contenteditable="true">New note</div>';
    $("#notesContainer").append(newDiv);
    $(".movable").draggable({containment : [0, 50, 4000, 4000] });
    $('.resizable').resizable();
  });

  $('#addImage').click(function(){
    deleteStatus = false;
    $('#imgForm').toggle();
  });

  $('#imgLinkInput').click(function(){
    deleteStatus = false;
    var imgSrc = $('input[name=imgLink]').val();

    $('#imgForm').trigger("reset");
    var newDiv = '<div class="movable"><img class="resizable" src="' + imgSrc + '" alt="Image"></div>';
    $("#notesContainer").append(newDiv);
    $('.movable').draggable();
    $('.resizable').resizable();
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
