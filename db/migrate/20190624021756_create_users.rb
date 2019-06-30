class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password

      t.timestamps
    end

    #todo add_index :users, :name, unique: true
  end
end
