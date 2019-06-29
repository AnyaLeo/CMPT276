class User < ApplicationRecord
    validates :name, presence: true    # Name Can't be empty
    validates :password, presence: true    # Password Can't be empty
end
