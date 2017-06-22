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
guest_group3 = Group.create!(title: "This is a group", author_id: guest.id)
guest_group4 = Group.create!(title: "That only belongs", author_id: guest.id)
guest_group5 = Group.create!(title: "To the", author_id: guest.id)
guest_group6 = Group.create!(title: "Guest account", author_id: guest.id)

#
