class PagesController < ApplicationController
  #we need this so that the css is not messed up
  layout false;
  def index
    @board = Board.new
    @boards = Board.all
  end

  def home
  end

  def help
  end

  def about
  end

  def contact
  end

  def boards
  end

  def groups
  end

  def profile
  end
end
