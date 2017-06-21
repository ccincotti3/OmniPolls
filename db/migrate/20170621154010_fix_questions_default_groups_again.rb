class FixQuestionsDefaultGroupsAgain < ActiveRecord::Migration
  def change
    remove_column(:questions, :group_id)
    add_column(:questions, :group_id, :integer, :null => false)
  end
end
