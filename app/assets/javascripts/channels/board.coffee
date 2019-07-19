App.room = App.cable.subscriptions.create "BoardChannel",
    connected: ->
        # Called when the subscription is ready for use on the server

    disconnected: ->
        # Called when the subscription has been terminated by the server

    received: (data) ->
        console.log('canvas modified!');
        canvas.loadFromJSON(data.object, ->
          canvas.renderAll();
        );
