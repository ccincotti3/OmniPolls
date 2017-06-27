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

question_group_1 = Question.create!(body: "Hot dogs?", question_type: 1, active: false, group_id: 1)
question_group_2 = Question.create!(body: "Horses or Ducks?", question_type: 1, active: false, group_id: 1)
question_group_3 = Question.create!(body: "Would you like fries with that?", question_type: 1, active: false, group_id: 2)
question_group_4 = Question.create!(body: "Soup or Salad?", question_type: 1, active: false, group_id: 2)
question_group_5 = Question.create!(body: "Is Pepsi Okay?", question_type: 1, active: false, group_id: 2)

possible_responses1 = PossibleResponse.create!()


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
