export const findUserSelector = (id) => (state) => {
  return state.usersData.users.find((user) => user.id === id);
};
