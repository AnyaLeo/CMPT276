class PagesController < ApplicationController
  layout false;
  def index
    render('index');
  end
end
