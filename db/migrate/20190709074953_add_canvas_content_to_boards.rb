class AddCanvasContentToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :canvas_content, :string
  end
end
