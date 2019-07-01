class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  root 'application#hello'
end
