# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(first_name: "Guest", last_name: "guest", username: "guest", password: "password")
guest_group1 = Group.create!(title: "Group 1", author_id: guest.id)
guest_group2 = Group.create!(title: "Group 2", author_id: guest.id)
guest_group3 = Group.create!(title: "Ungrouped", author_id: guest.id)
#
question1 = Question.create!(body: "Hot dogs?", question_type: 1, active: false, group_id: 1)
question2 = Question.create!(body: "Horses or Ducks?", question_type: 1, active: false, group_id: 1)
question3 = Question.create!(body: "Would you like fries with that?", question_type: 1, active: false, group_id: 2)
question4 = Question.create!(body: "Is Pepsi Okay?", question_type: 1, active: false, group_id: 2)
#
possible_responses1 = PossibleResponse.create!(possible_response_name: "Love 'em", question_id: question1.id)
possible_responses2 = PossibleResponse.create!(possible_response_name: "Nope!", question_id: question1.id)
possible_responses3 = PossibleResponse.create!(possible_response_name: "Horses", question_id: question2.id)
possible_responses4 = PossibleResponse.create!(possible_response_name: "Ducks", question_id: question2.id)
possible_responses5 = PossibleResponse.create!(possible_response_name: "NO", question_id: question3.id)
possible_responses6 = PossibleResponse.create!(possible_response_name: "MAYBE", question_id: question3.id)
possible_responses7 = PossibleResponse.create!(possible_response_name: "YES", question_id: question3.id)
possible_responses8 = PossibleResponse.create!(possible_response_name: "YES", question_id: question4.id)
possible_responses9 = PossibleResponse.create!(possible_response_name: "NO", question_id: question4.id)
#
active_poll = ActivePoll.create!(user_id: 1)
#
#
Response.create!(answer: "Love 'em", possible_response_id: 1)
Response.create!(answer: "Love 'em", possible_response_id: 1)
Response.create!(answer: "Love 'em", possible_response_id: 1)
Response.create!(answer: "Nope!", possible_response_id: 2)
Response.create!(answer: "Nope!", possible_response_id: 2)
Response.create!(answer: "Horses", possible_response_id: 3)
Response.create!(answer: "Horses", possible_response_id: 3)
Response.create!(answer: "Ducks", possible_response_id: 4)
Response.create!(answer: "Ducks", possible_response_id: 4)
Response.create!(answer: "NO", possible_response_id: 5)
Response.create!(answer: "MAYBE", possible_response_id: 6)
Response.create!(answer: "YES", possible_response_id: 7)
Response.create!(answer: "YES", possible_response_id: 8)


# question1['total_responses'] = question1.total_responses
# question2['total_responses'] = question2.total_responses
# question3['total_responses'] = question3.total_responses
# question4['total_responses'] = question4.total_responses
#
# question1.save
# question2.save
# question3.save
# question4.save

# create_table "responses", force: :cascade do |t|
#   t.string   "answer",               null: false
#   t.datetime "created_at",           null: false
#   t.datetime "updated_at",           null: false
#   t.integer  "possible_response_id", null: false
# end



# create_table "possible_responses", force: :cascade do |t|
#   t.string   "possible_response_name", null: false
#   t.integer  "question_id",            null: false
#   t.datetime "created_at",             null: false
#   t.datetime "updated_at",             null: false
# end
#
# create_table "questions", force: :cascade do |t|
#   t.string   "body",                          null: false
#   t.integer  "question_type",                 null: false
#   t.boolean  "active",        default: false
#   t.datetime "created_at",                    null: false
#   t.datetime "updated_at",                    null: false
#   t.integer  "group_id",                      null: false
# end
#
# create_table "responses", force: :cascade do |t|
#   t.string   "answer",               null: false
#   t.datetime "created_at",           null: false
#   t.datetime "updated_at",           null: false
#   t.integer  "possible_response_id", null: false
# end
#
# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "password_digest"
#   t.string   "session_token"
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
#   t.string   "first_name",      null: false
#   t.string   "last_name",       null: false
# end
