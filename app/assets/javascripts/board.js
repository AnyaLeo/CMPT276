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

  //add new text note on click
  $('#add').click(function(){
    canvas.isDrawingMode = false;
    var textNote = new fabric.IText('New Note', {
      left: 0,
      top: 0,
    });
    canvas.add(textNote);
  });

  $('#addImage').click(function(){
    canvas.isDrawingMode = false;
    $('#imgForm').toggle();
    console.log("added the image");
  });

  //a background change in jquery thats not working, fix later
  /*$('#bgcolor-input').click(function() {
    console.log("we're in");
    var newColor = '#' + this.toString();
    console.log(newColor);
    canvas.backgroundColor = newColor;
    canvas.renderAll();
    
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
                alert("Board saved successfully!")
                console.log('success');
      }
    });
  });

  //toggle show/hide dropdown content for all the dropdown btns separately
  //there is probably a better way to do this, feel free to replace this
  $("#bgcolor-button").click(function(){
    $("#bg-dropdown").toggle();
  });

  $("#draw").click(function(){
    $("#draw-dropdown").toggle();
  });

  //range slider
  $( "#line-width" ).slider({
    //values: [ 1, 50 ]
    min: 1,
    max: 50
  });

  //set the line width
 // var selection = $( ".selector" ).slider( "value" );

  $('#line-width').mouseleave(function(){
    var newWidth = $( "#line-width" ).slider( "value" );
    canvas.freeDrawingBrush.width = newWidth;
    console.log("line width changed");
  });



});
