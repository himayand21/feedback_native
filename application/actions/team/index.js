import updateFeedbackPattern from "../../api/updateFeedbackPattern";
import createTeam from "../../api/createTeam";
import submitRequest from "../../api/submitRequest";
import getFeedbackPattern from "../../api/getFeedbackPattern";
import {getForm} from "../../actions/form";

export const editDesignation = (designation, oldDesignation, index) => {
  return {
    type: "EDIT_DESIGNATION",
    index,
    designation,
    oldDesignation
  };
};

export const editSkill = (designationIndex, skill, index) => {
  return {
    type: "EDIT_SKILL",
    designationIndex,
    skill,
    index
  };
};

export const removeDesignation = index => {
  return {
    type: "REMOVE_DESIGNATION",
    index
  };
};

export const removeSkill = (designationIndex, index) => {
  return {
    type: "REMOVE_SKILL",
    designationIndex,
    index
  };
};

export const addDesignation = () => {
  return {
    type: "ADD_DESIGNATION"
  };
};

export const addSkill = (index, skill) => {
  return {
    type: "ADD_SKILL",
    index,
    skill
  };
};

export const updateDesignation = designation => {
  return {
    type: "UPDATE_DESGN",
    designation
  };
};

export const resetTeam = () => {
  return {
    type: "RESET_TEAM"
  };
};

export const configTeam = teamId => {
  return dispatch => {
    getFeedbackPattern(teamId).then(response => {
      dispatch(updateTeam(response));
    })
  }
};

const updateTeam = response => {
  return dispatch => {
    const designations = Object.keys(response.designations);
    const data = designations.map(designation => {
      return {
        designation,
        skills: response.designations[designation],
        error: "",
        skillError: ""
      }
    })
    dispatch(updateTeamState("data", data));
    dispatch(updateTeamState("teamName", response.teamName));
  }
}
export const updateTeamState = (key, value) => {
  return {
    type: "UPDATE_TEAM_STATE",
    key,
    value
  };
};

export const submitTeam = store => {
  return dispatch => {
    dispatch(updateTeamState("show", true));
    dispatch(updateTeamState("notification", "started"));
    const { data: teamData } = store.team;
    let designations = {};
    teamData.forEach(team => {
      designations = { ...designations, [team.designation]: team.skills }
    })
    const data = {
      designations,
      teamName: store.team.teamName
    };
    if (store.userData.teamId) {
      updateFeedbackPattern(store.userData.teamId, data).then(response => {
        if (response.message === "done") {
          dispatch(updateTeamState("notification", "done"));
          dispatch(getForm(store.userData.teamId));
        }
      });
    }
    else {
      createTeam(data)
        .then(response => {
          return {
            name: store.signUp.name,
            email: store.signUp.email,
            password: store.signUp.password,
            authorized: true,
            admin: true,
            teamId: response.team._id,
            question: store.signUp.selectedOption,
            answer: store.signUp.answer.toUpperCase()
          };
        })
        .then(user => {
          submitRequest(user).then(response => {
            if (response.message === "done") {
              dispatch(updateTeamState("notification", "done"));
            }
          });
        });
    }
  }
}