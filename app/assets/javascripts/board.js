$(document).ready(function(){
    var canvas = new fabric.Canvas('drawingCanvas');
  canvas.isDrawingMode = false;
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.color = "black";
  canvas.setHeight(3920);
  canvas.setWidth(3970);

  var deleteStatus = false;

  //add new text note on click
  $('#add').click(function(){
    deleteStatus = false;
    var newDiv = '<div class="movable resizable" contenteditable="true">New note</div>';
    $('#notesContainer').append(newDiv);
    $(".movable").draggable({containment : [30, 80, 4000, 4000] }).css("position", "absolute");
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
    $('body').append(newDiv);
    $('.movable').draggable({containment : [30, 80, 4000, 4000] });
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

  //drawing
  $('#draw').click(function(){
    if (canvas.isDrawingMode){
      canvas.isDrawingMode = false;
    }
    else {
      canvas.isDrawingMode = true;
    }
  });

});
