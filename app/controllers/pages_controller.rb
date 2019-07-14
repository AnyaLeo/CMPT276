class PagesController < ApplicationController

  def home
  end

  def help
  end

  def about
  end

  def contact
  end

  def boards
    @board = Board.new
    @boards = Board.all
    @user = User.find_by_id(session["user_id"])
  end

  def groups
  end

  def profile
  end

end
