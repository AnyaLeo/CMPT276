module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def subscribed
        stream_from 'lines'
    end

    def unsubscribed
    end
    
  end
end
