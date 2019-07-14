//= require cable
//= require_self
//= require_tree .


this.App = {};

App.cable = ActionCable.createConsumer();

App.messages = App.cable.subscriptions.create('ApplicationCable::Channel', {

  // Called when there's incoming data on the websocket for this channel
  received: function(data) {
      canvas.isDrawingMode = data.canvas.isDrawingMode;
  },

  sendMessage: function(messageBody) {

  }
});

$(document).ready(function(){
  var canvas = new fabric.Canvas('drawingCanvas');
  canvas.isDrawingMode = false;
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.color = "black";
  canvas.setHeight(4000);
  canvas.setWidth(4000);

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
});
