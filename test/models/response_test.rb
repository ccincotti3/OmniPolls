# == Schema Information
#
# Table name: responses
#
#  id                   :integer          not null, primary key
#  answer               :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  possible_response_id :integer          not null
#

require 'test_helper'

class ResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
