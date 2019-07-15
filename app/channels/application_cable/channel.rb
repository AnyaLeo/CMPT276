module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def subscribed
      stream_from ‘boards’
    end
  end
end
