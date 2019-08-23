import updateInterviewerData from "../utils/updateInterviewerData";
import updateAdminData from "../utils/updateAdminData";

const initialState = {
  name: "",
  email: "",
  password: "",
  admin: false,
  data: [],
  authorized: false,
  message: '',
  requests: [],
  interviewers: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_STATE":
      if (state.message)
        return state;
      else
        return initialState;

    case "UPDATE_STATE":
      return { ...state, [action.key]: action.value };

    case "ADD_USER_DETAILS":
      return {
        ...state,
        data: [],
        name: action.details.user[0].name,
        email: action.details.user[0].email,
        password: action.details.user[0].password,
        userId: action.details.user[0]._id,
        teamId: action.details.user[0].teamId,
        authorized: true,
        admin: action.details.user[0].admin
      };

    case "UPDATE_TEAM_NAME":
      return { ...state, teamName: action.teamName };

    case "ADD_MESSAGE":
      return { ...initialState, name: state.name, password: state.password, email: state.email, message: action.message };

    case "UPDATE_ADMIN_DATA":
      return updateAdminData(state, action.details);

    case "UPDATE_REQUESTS":
      return { ...state, requests: action.requests };

    case "UPDATE_PANEL":
      return { ...state, interviewers: action.panel };

    case "UPDATE_INTERVIEWER_DATA":
      return updateInterviewerData(state, action.details);

    default:
      return state;
  }
};
export default userReducer;
