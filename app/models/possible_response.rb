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

class PossibleResponse < ActiveRecord::Base
  validates :possible_response_name, presence: true

  belongs_to :question
  has_many :responses
end
