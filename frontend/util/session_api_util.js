export const signUp = (user_params) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user_params
  });
};

export const logIn = (user_params) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user_params
  });
};

export const logOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
