const initialState = {
  teamName: "",
  data: [],
  designation: "",
  message: ""
};

const teamReducer = (state = initialState, action) => {
  let data = [...state.data];
  switch (action.type) {
    
    case "UPDATE_TEAM_STATE":
      return { ...state, [action.key]: action.value };

    case "EDIT_DESIGNATION":
      data[action.index].error = "";
      let indices = [];
      data = data.map((each, index) => {
        if (each.designation === action.designation && action.designation.length > 0)
          return { ...each, error: action.designation + " already exists" }
        else if (each.designation === action.oldDesignation) {
          indices.push(index);
          return each
        }
        else return each
      });
      if (indices.length === 2) {
        const index = indices.indexOf(action.index);
        indices.splice(index, 1);
        data[indices[0]].error = "";
      }
      if (data.filter(data => data.designation === action.designation).length > 0 && action.designation.length > 0)
        data[action.index].error = action.designation + " already exists";
      data[action.index].designation = action.designation;
      return { ...state, data };

    case "RESET_SIGN_UP":
      return initialState;

    case "EDIT_SKILL":
      data[action.designationIndex] = {
        ...data[action.designationIndex],
        skillError: ""
      };
      if (data[action.designationIndex].skills.includes(action.skill) && action.skill.length > 0)
        data[action.designationIndex] = {
          ...data[action.designationIndex],
          skillError: action.skill + " already exists"
        };
      data[action.designationIndex].skills.splice(
        action.index,
        1,
        action.skill
      );
      return { ...state, data };

    case "REMOVE_DESIGNATION":
      const designation = data[action.index].designation;
      data.splice(action.index, 1);
      index = data.map(each => {
        if (each.designation === designation) return 1
        return 0
      })
      const sumOfIndices = index.reduce((acc, sum) => acc + sum);
      if (sumOfIndices === 1) {
        const findIndex = index.indexOf(1);
        data[findIndex] = { ...data[findIndex], error: "" }
      }

      return { ...state, data };

    case "REMOVE_SKILL":
      if (data[action.designationIndex].skillError.includes(data[action.designationIndex].skills[action.index]))
        data[action.designationIndex].skillError = "";
      data[action.designationIndex].skills.splice(action.index, 1);
      return { ...state, data };

    case "ADD_DESIGNATION":
      if (
        data.length > 0 &&
        data.filter(data => data.designation === state.designation).length > 0
      )
        return { ...state, message: state.designation + " already exists" };
      else {
        data.unshift({
          designation: state.designation,
          skills: [],
          error: "",
          skillError: ""
        });
        return { ...state, data, designation: "", message: "" };
      }

    case "ADD_SKILL":
      data[action.index].skills.push(action.skill);
      return { ...state, data };

    case "CONFIG_TEAM": {
      return {
        ...state,
        data: action.payload.data,
        teamName: action.payload.teamName
      };
    }

    default:
      return state;
  }
};

export default teamReducer;
