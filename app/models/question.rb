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

class Question < ActiveRecord::Base
  validates :body, :question_type, presence: true

  has_many :possible_responses, dependent: :destroy,
  foreign_key: :question_id,
  class_name: :PossibleResponse

  belongs_to :group

  has_one :author,
  through: :group,
  source: :author

  has_many :responses,
  through: :possible_responses,
  source: :responses

  def possible_responses_array
    array = []
    possible_responses.each do | resp |
      array << resp.id
    end
    return array;
  end
end
