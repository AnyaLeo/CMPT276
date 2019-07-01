class PagesController < ApplicationController
  
  layout false;
  
  def index
    render('index');
  end
  
  def home
  end

  def help
  end
end

