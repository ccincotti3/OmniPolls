# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ActiveRecord::Base
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :questions, dependent: :destroy

  def questions_array
    array = []
    questions.each do |question|
      array << question.id
    end
    return array;
  end

end
