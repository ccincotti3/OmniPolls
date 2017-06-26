export const CreatePossibleResponses= (possible_responses, question_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/possible_responses',
    data: {possible_responses, question_id}
  });
};

export const fetchPossibleResponses=(question_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/possible_responses',
    data: {question_id}
  });
};
