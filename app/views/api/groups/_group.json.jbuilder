json.extract! group, :id, :title, :author_id
json.questionIds do
  json.array!(group.questions) do | question |
    json.extract! question, :id
  end
end
