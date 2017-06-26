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

class Response < ActiveRecord::Base
  belongs_to :possible_response
end
