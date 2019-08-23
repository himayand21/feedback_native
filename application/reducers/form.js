import onDesignationChange from "../utils/onDesignationChange";

const initialState = {
  applicant_name: "",
  date_of_interview: new Date(),
  exp_year: "",
  exp_month: "",
  applying_for: "",
  rating: "",
  others: "",
  comments: "",
  status: "",
  message: ""
};

const formReducer = (state = initialState, action) => {

  switch (action.type) {

    case "UPDATE_FORM":
      return {
        ...state,
        skillmap: action.payload.skillmap,
        options: action.payload.options,
      };

    case "RESET_FORM":
      return {...state, ...initialState}

    case "UPDATE_FORM_STATE":
      return { ...state, [action.key]: action.value };

    case "STAR_CLICK":
      rating = { ...state.rating };
      rating[action.skill] = action.rating;
      return { ...state, rating };

    case "DESIGNATION_CHANGE":
      return onDesignationChange(state, action.designation);

    case "REMOVE_RATING":
      others = [...state.others];
      others.push(action.skill);
      rating = {...state.rating};
      delete rating[action.skill];
      return {...state, rating, others};

    case "ADD_SKILLS":
      others = [...state.others];
      index = others.indexOf(action.skill);
      others.splice(index,1)
      rating = {...state.rating};
      rating[action.skill] = 1;
      return {...state, rating, others};
      
    default:
      return state;
  }
};
export default formReducer;
