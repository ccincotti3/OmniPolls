class CreatePossibleResponses < ActiveRecord::Migration
  def change
    create_table :possible_responses do |t|
      t.string :possible_response_name, null: false
      t.integer :question_id, null: false
      
      t.timestamps null: false
    end
  end
end
