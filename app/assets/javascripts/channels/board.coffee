$(document).ready ->
  boardId = $(".boardId").attr("data-id");
  App.boards = App.cable.subscriptions.create { channel: "BoardChannel", board_id: boardId },
    connected: ->
        # Called when the subscription is ready for use on the server
        console.log("connected")

    disconnected: ->
        # Called when the subscription has been terminated by the server

    received: (data) ->
        console.log('canvas modified!');
        canvas.loadFromJSON(data.canvas, ->
          canvas.renderAll();
        );
