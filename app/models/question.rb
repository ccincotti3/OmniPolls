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

  has_many :responses, dependent: :destroy

  belongs_to :group

  has_one :author,
  through: :group,
  source: :author
end
