class ChangeResponsesTable < ActiveRecord::Migration
  def change
    remove_column(:responses, :question_id)
    add_column(:responses, :possible_response_id, :integer, :null => false)
  end
end
