class CreateActivePolls < ActiveRecord::Migration
  def change
    create_table :active_polls do |t|
      t.integer :user_id, null: false
      t.integer :question_id
      t.timestamps null: false
    end
    add_index(:active_polls, :user_id, unique: true)
  end
end
