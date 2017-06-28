export const allGroups = ( groups ) => {
  return Object.keys(groups).map(id => groups[id]);
};



export const questionSelection = ( questions, ids) => {
  return ids.map((id) => {
    return questions[id];
    }
  );
};

export const responseCount = (possibleResponses) => {
  let count = 0;
  allGroups(possibleResponses).forEach((resp) => {
    count += resp.response_count;
  });
  return count;
};
