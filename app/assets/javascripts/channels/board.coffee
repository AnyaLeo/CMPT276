$(document).ready ->
  boardId = $(".boardId").attr("data-id");
  App.boards = App.cable.subscriptions.create { channel: "BoardChannel", board_id: boardId },
    connected: ->
        console.log("connected")

    disconnected: ->

    received: (data) ->
        console.log('canvas modified!');
        canvas.loadFromJSON(data.canvas, ->
          canvas.renderAll();
        );
