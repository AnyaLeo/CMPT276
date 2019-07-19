module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def subscribed
      stream_from ‘lines’
    end
  end
end
