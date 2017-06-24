debugger
@questions.each do |question|
  json.set! question.id do
    json.extract! question, :group_id
  end
end
