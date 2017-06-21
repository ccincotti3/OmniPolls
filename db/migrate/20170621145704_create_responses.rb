class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :question_id, null: false
      t.string :answer, null: false

      t.timestamps null: false
    end
    add_index(:responses, :question_id)
  end
end
