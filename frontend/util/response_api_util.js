export const fetchResponses = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/responses'
  });
};

export const createResponse= (response_params) => {
  return $.ajax({
    method: 'POST',
    url: 'api/responses',
    data: response_params
  });
};

export const updateResponse = (response) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/responses/${response.id}`,
    data: response
  });
};

export const deleteResponse = (ids) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/responses/${ids}`,
  });
};
