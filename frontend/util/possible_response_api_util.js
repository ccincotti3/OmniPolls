export const CreatePossibleResponses= (possible_responses, question_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/possible_responses',
    data: {possible_responses, question_id}
  });
};
