export const fetchActive = (username) => {
  return $.ajax({
    method: 'GET',
    url: 'api/active_polls/0',
    data: {username}
  });
};


export const updateActive = (question_id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/active_polls/0`,
    data: {active_polls: question_id}
  });
};
