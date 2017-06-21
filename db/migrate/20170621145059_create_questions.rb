class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.integer :question_type, null: false
      t.integer :group_id, null: false
      t.boolean :active, default: false
      t.timestamps null: false
    end
    add_index(:questions, :group_id)
  end
end
