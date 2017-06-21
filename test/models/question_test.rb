# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  body          :string           not null
#  question_type :integer          not null
#  active        :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  group_id      :integer          not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
