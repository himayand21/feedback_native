import getFeedbackPattern from "../../api/getFeedbackPattern";
import postFeedback from "../../api/postFeedback";
import checkDuplicateApplicant from "../../api/checkDuplicateApplicant";
import dataFormatter from "../../utils/dataFormatter";

export const getForm = teamId => {
  return dispatch => {
    getFeedbackPattern(teamId).then(details => {
      let payload = {};
      let skillmap = details.designations;
      let options = [];
      Object.keys(skillmap).map(skill_cat => {
        options.push({ value: skill_cat, label: skill_cat });
      });
      payload = { skillmap, options };
      dispatch(updateForm(payload));
      dispatch(updateTeamName(details.teamName));
    });
  };
};

export const checkApplicant = name => {
  return dispatch => {
    checkDuplicateApplicant(name).then(response => {
      if (response.message === "found")
        dispatch(updateFormState('message', name + ' already exists.'))
      else dispatch(updateFormState('message', ""))
    })
  }
}

const updateTeamName = teamName => {
  return {
    type: "UPDATE_TEAM_NAME",
    teamName
  };
};

export const submitForm = store => {
  const data = dataFormatter(store);
  return dispatch => {
    dispatch(updateFormState("message", "started"));
    postFeedback(data).then(response => {
      if (response.message === "done") {
        dispatch(updateFormState("message", response.message));
      }
    });
  };
};

const updateForm = payload => {
  return {
    type: "UPDATE_FORM",
    payload
  };
};
export const resetForm = () => {
  return {
    type: "RESET_FORM"
  };
};

export const updateFormState = (key, value) => {
  const action = {
    type: "UPDATE_FORM_STATE",
    key,
    value
  };
  return action;
};
export const onStarClick = (rating, skill) => {
  const action = {
    type: "STAR_CLICK",
    rating,
    skill
  };
  return action;
};
export const handleDesignationChange = designation => {
  return {
    type: "DESIGNATION_CHANGE",
    designation
  };
};

export const addSkill = skill => {
  return {
    type: "ADD_SKILLS",
    skill
  };
};

export const removeRating = skill => {
  const action = {
    type: "REMOVE_RATING",
    skill
  };
  return action;
};
