class BoardChannel < ApplicationCable::Channel
  def subscribed
    stream_for "board_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def speak(data)
  #   #Message.create! content: data['message']
  #   ActionCable.server.broadcast 'room_channel', message: data['message']
  # end
end
