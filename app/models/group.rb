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
  class: :User

  has_many :questions, dependent: :destroy

end
