export const allGroups = ( {groups} ) =>
{
  
  return Object.keys(groups).map(id => groups[id]);
};
