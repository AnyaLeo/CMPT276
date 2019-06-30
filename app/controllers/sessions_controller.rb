class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:session][:name])

    if user && user.valid_password?(params[:session][:password])
      #correct user login
      log_in user
      redirect_to pages/index
    else 
      #wrong user login
      flash.now[:danger] = 'WRONG BAD BAD BAD YOU BAD LOGIN, INCRORECT'
    end
  end

  def destroy
  end
end
