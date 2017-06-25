class PossibleResponse < ActiveRecord::Base
  validates :possible_response_name, presence: true

  belongs_to :question
end
