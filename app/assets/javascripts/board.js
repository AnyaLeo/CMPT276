//= require cable
//= require_self
//= require_tree .

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
  var timeSinceLastSend = $.now();

  canvas.on("mouse:up", function(){
    console.log("mouseup");
    var activeObject = canvas.getActiveObject(),
    activeGroup = canvas.getActiveGroup();
    if (!activeObject && !activeGroup) {
      var new_canvas = JSON.stringify(canvas);
      console.log("pass");
      $.ajax({
        method: "put",
        url: "/boards/" + boardId + "/update_board",
        data: { 'canvas': new_canvas,
                'board_id': boardId }
      });
      $.ajax({
        url: "/boards/" + boardId + "/save_board",
        method: "put",
        data: { 'board_id': boardId,
                'canvas': new_canvas },
      });
    }
  });

  //REPEAT CODE BUT I DON'T CAREEEE
  function update_board(){
    console.log("mouseup");
    var activeObject = canvas.getActiveObject(),
    activeGroup = canvas.getActiveGroup();
    if (!activeObject && !activeGroup) {
      var new_canvas = JSON.stringify(canvas);
      console.log("pass");
      $.ajax({
        method: "put",
        url: "/boards/" + boardId + "/update_board",
        data: { 'canvas': new_canvas,
                'board_id': boardId }
      });
      $.ajax({
        url: "/boards/" + boardId + "/save_board",
        method: "put",
        data: { 'board_id': boardId,
                'canvas': new_canvas },
      });
    }
  }

  //add new text note on click
  $('#add').click(function(){
    canvas.isDrawingMode = false;
    var textNote = new fabric.IText('New Note', {
      left: 0,
      top: 0,
    });
    canvas.add(textNote);
    update_board();
  });

  $('#addImage').click(function(){
    canvas.isDrawingMode = false;
    $('#imgForm').toggle();
  });

  //a background change in jquery thats not working, fix later
  /*$('#bgcolor-input').click(function() {
    console.log("we're in");
    var newColor = '#' + this.toString();
    console.log(newColor);
    canvas.backgroundColor = newColor;
    canvas.renderAll();
    canvasModifiedCallback;
  });*/

  //on uploading file
  $('#file-input').change(function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function(img) {
            var oImg = img.set({ left: 0, top: 0 });
            canvas.add(oImg).renderAll();
            canvas.setActiveObject(oImg);
        });
    };
    reader.readAsDataURL(file);
    update_board();
  });

  //delete selected objects
  $('#delete').click(function(){
    canvas.isDrawingMode = false;
    var activeObject = canvas.getActiveObject(),
    activeGroup = canvas.getActiveGroup();
    if (activeObject) {
      if (confirm('Are you sure?')) {
        canvas.remove(activeObject);
      }
    }
    else if (activeGroup) {
      if (confirm('Are you sure?')) {
        var objectsInGroup = activeGroup.getObjects();
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
          canvas.remove(object);
        });
        }
    }
    update_board();
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

  //range slider
  $("#line-width").slider({
    min: 1,
    max: 50
  });

  $('#line-width').mouseleave(function(){
    var newWidth = $("#line-width").slider("value");
    canvas.freeDrawingBrush.width = newWidth;
    console.log("line width changed");
  });
});
