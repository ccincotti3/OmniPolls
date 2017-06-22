json.extract! group, :id, :title, :author_id, :questions
json.question_ids do
  json.array!(group.questions) do | question |
    json.extract! question, :id
  end
end
