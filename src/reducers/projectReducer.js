const projectReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return action.projects;
    default:
      return state;
  }
};

export default projectReducer;
