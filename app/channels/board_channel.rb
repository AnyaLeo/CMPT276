class BoardChannel < ApplicationCable::Channel
  def subscribed
    board = Board.find(params[:board_id])
    stream_for board
  end

  def unsubscribed
  end
end
