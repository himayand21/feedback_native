const initialState = {
  name: "",
  email: "",
  password: "",
  team: "",
  teamNames: [],
  answer: "",
  selectedOption: "",
  message: ""
};
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STATE_SIGNUP":
      return { ...state, [action.key]: action.value };
    case "ADD_MESSAGE_SIGNUP":
      return {...state, message: action.message};
    case "REMOVE_MESSAGE_SIGNUP":
      return {...state, message: ""};
    case "ADD_TEAM_NAMES":
      return { ...state, teamNames: action.payload };
    case "HANDLE_TEAM_CHANGE":
      return { ...state, team: action.team };
    case "SELECT_QUESTION":
      return { ...state, selectedOption: action.selectedOption };
    case "RESET_SIGN_UP":
      return initialState;
    default:
      return state;
  }
};

export default signUpReducer;
