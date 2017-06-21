class FixQuestionsDefaultGroups < ActiveRecord::Migration
  def change
    change_column(:questions, :group_id, :integer, :null => false)
  end
end
