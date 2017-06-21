export const fetchGroups = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/groups'
  });
};

export const createGroup = (group_params) => {
  return $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: group_params
  });
};

export const updateGroup = (group) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: group
  });
};

export const deleteGroup= (group) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${group.id}`,
  });
};
