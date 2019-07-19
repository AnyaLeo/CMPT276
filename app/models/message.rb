class Message < ApplicationRecord
    after_create_commit do
        MessageBroadcastJob.perform_later self
    end
end
