class CreateBoardsUsersJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :boards, :users
  end
end
