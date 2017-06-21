class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.timestamps null: false
    end
    add_index(:groups, :author_id)
  end
end
