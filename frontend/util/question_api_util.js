export const fetchQuestions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/questions'
  });
};

export const createQuestion= (question_params) => {
  return $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: group_params
  });
};

export const updateQuestion = (question) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/questions/${question.id}`,
    data: question
  });
};

export const deleteQuestion= (question) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/questions/${question.id}`,
  });
};
