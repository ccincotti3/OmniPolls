@possible_responses.each do |possible_response|
  json.set! possible_response.id do
    json.extract! possible_response, :id, :possible_response_name, :question_id, :response_count
  end
end
