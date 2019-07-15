class BoardsController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_board, only: [:show, :edit, :update, :destroy]
  
    layout false, only: [:show]
    layout "board", only: [:show]
  
    # GET /boards
    # GET /boards.json
    def index
      @boards = Board.all
    end
  
    # GET /boards/1
    # GET /boards/1.json
    def show
      ActionCable.server.broadcast ‘lines’
      head :ok
    end
  
    # GET /boards/new
    def new
      @board = Board.new
    end
  
    # GET /boards/1/edit
    def edit
    end
  
    # POST /boards
    # POST /boards.json
    def create
      @board = Board.new(board_params)
      @user = User.find(session["user_id"])
  
      respond_to do |format|
        if @board.save
          @board.update_attribute(:canvas_content, "{\"objects\":[],\"background\":\"\"}")
          @user.boards << @board
          format.html { redirect_to @board }
          format.json { render :show, status: :created, location: @board }
        else
          format.html { render :new }
          format.json { render json: @board.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /boards/1
    # PATCH/PUT /boards/1.json
    def update
      respond_to do |format|
        if @board.update(board_params)
          format.html { redirect_to @board, notice: 'Board was successfully updated.' }
          format.json { render :show, status: :ok, location: @board }
        else
          format.html { render :edit }
          format.json { render json: @board.errors, status: :unprocessable_entity }
        end
      end
    end
  
    def save_board
      @board = Board.find(params[:board_id])
      @board.update_attribute(:canvas_content, params[:canvas])
    end
  
    def add_user
      @board = Board.find(params[:board_id])
      @user = User.find_by_email(params[:user_email])
      @board.users << @user
    end
  
    def remove_user
      @board = Board.find(params[:board_id])
      @user = @board.users.find(params[:user_id])
      @board.users.delete(@user)
    end
  
    # DELETE /boards/1
    # DELETE /boards/1.json
    def destroy
      @board = Board.find(params[:id])
      @board.destroy
      respond_to do |format|
        format.html { redirect_to boards_url }
        format.json { head :no_content }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_board
        @board = Board.find(params[:id])
      end
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def board_params
        params.require(:board).permit(:title, :canvas_content)
      end
  end
  