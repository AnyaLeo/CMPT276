var canvas;
$(document).ready(function(){
  canvas = new fabric.Canvas('drawingCanvas');
  canvas.isDrawingMode = false;
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.color = "black";

  var onLoadContent = $(".content").attr("data-id");
  console.log(onLoadContent);
  canvas.loadFromJSON(onLoadContent, function() {
    canvas.renderAll();
  });
  canvas.setHeight(2500);
  canvas.setWidth(2500);
  var boardId = $(".boardId").attr("data-id");
  console.log(boardId)

  var deleteStatus = false;

  //add new text note on click
  $('#add').click(function(){
    canvas.isDrawingMode = false;
    deleteStatus = false;
    var textNote = new fabric.IText('New Note', {
      left: 0,
      top: 0,
    });
    canvas.add(textNote);

  });

  $('#addImage').click(function(){
    canvas.isDrawingMode = false;
    deleteStatus = false;
    $('#imgForm').toggle();
    console.log("added the image");
  });

  //on submitting img link
  $('#imgLinkInput').click(function(){
    var imgSrc = $('input[name=imgLink]').val();
    $('#imgForm').trigger("reset");
    fabric.Image.fromURL(imgSrc, function(newImg) {
      var img = newImg.set({ left: 0, top: 0 });
      canvas.add(img);
    });
    console.log("inputted the link for the image");
  });

  //allow user to delete notes
  $('#delete').click(function(){
    canvas.isDrawingMode = false;
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
              'canvas': newCanvas },
      success: function(){
                console.log('success');
      }
    });
  });

  //delete the selected objects
  function deleteObjects(){
	var activeObject = canvas.getActiveObject(),
  activeGroup = canvas.getActiveGroup();
  if (activeObject) {
      if (confirm('Are you sure you want to delete the object?')) {
          canvas.remove(activeObject);
      }
  }
  else if (activeGroup) {
      if (confirm('Are you sure you want to delete the object?')) {
          var objectsInGroup = activeGroup.getObjects();
          canvas.discardActiveGroup();
          objectsInGroup.forEach(function(object) {
          canvas.remove(object);
          });
      }
  }
}

//event listener for the deletion function
document.getElementById("delete").onclick = deleteObjects;

});
