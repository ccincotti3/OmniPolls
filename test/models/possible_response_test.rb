# == Schema Information
#
# Table name: possible_responses
#
#  id                     :integer          not null, primary key
#  possible_response_name :string           not null
#  question_id            :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'test_helper'

class PossibleResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
