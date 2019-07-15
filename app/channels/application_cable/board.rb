class Board < ApplicationCable::Channel
    def subscribed
        stream_from 'lines'
    end

    def unsubscribed
    end
end