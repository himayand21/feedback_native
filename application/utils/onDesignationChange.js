const onDesignationChange = (state, applying_for) => {

  let others = [];
  const skillmap = state.skillmap;
  Object.keys(skillmap).map(skill_cat => {
    skillmap[skill_cat].map(skill => {
      if (!others.includes(skill)) others.push(skill);
    });
  });

  let rating = {};
  if (skillmap[applying_for]) {
    skillmap[applying_for].map(skill => {
      others = others.filter(element => element !== skill);
      rating = { ...rating, [skill]: 1 };
      return null;
    });
  }
  return {
    ...state,
    others,
    rating,
    applying_for
  };

};
export default onDesignationChange;
