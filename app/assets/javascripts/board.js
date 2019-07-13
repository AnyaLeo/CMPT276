$(document).ready(function(){
  var canvas = new fabric.Canvas('drawingCanvas');
  canvas.isDrawingMode = false;
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.color = "black";

  var onLoadContent = $(".content").attr("data-id");
  console.log(onLoadContent);
  canvas.loadFromJSON(onLoadContent);
  canvas.setHeight(4000);
  canvas.setWidth(4000);
  var boardId = $(".boardId").attr("data-id");
  console.log(boardId)

  var deleteStatus = false;

  //add new text note on click
  $('#add').click(function(){
    deleteStatus = false;
    var newDiv = '<div class="movable resizable" contenteditable="true">New note</div>';
    $('#notesContainer').append(newDiv);
    $('.movable').draggable({containment : [30, 80, 4000, 4000] }).css("position", "absolute");
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
    $('#notesContainer').append(newDiv);
    $('.movable').draggable({containment : [30, 80, 4000, 4000] }).css("position", "absolute");
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

  //save canvas
  $('#save').click(function(){
    var newCanvas = JSON.stringify(canvas);
    $.ajax({
      url: "/boards/" + boardId + "/save_board",
      method: "put",
      data: { 'board_id': boardId,
              'canvas': newCanvas},
      success: function(){
                console.log('success');
      }
    });
  });

});
