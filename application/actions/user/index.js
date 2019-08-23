import getRequestsByTeamId from "../../api/getRequestsByTeamId";
import getInterviewersByTeamId from "../../api/getInterviewersByTeamId";
import verifyUserCreds from "../../api/verifyUserCreds";
import getInterviewerFeedbacks from "../../api/getInterviewerFeedbacks";
import getFeedbackByTeamId from "../../api/getFeedbackByTeamId";
import updateUser from "../../api/updateUser";
import removeUser from "../../api/removeUser";
import getUserData from "../../api/getUserData";
import {configTeam, resetTeam} from "../team";

export const resetState = () => {
  return dispatch => {
    dispatch(resetTeam());
    dispatch(resetAllStates());
  };
};
export const resetAllStates = () => {
  return {
    type: "RESET_STATE"
  }
}

export const submitAndVerify = (name, email, password) => {
  return dispatch => {
    verifyUserCreds(name, email, password).then(details => {
      if (details.message === "auth approved") {
        if (details.user[0].authorized === true) {
          if (details.user[0].admin === true)
            dispatch(adminLogin(details.user[0].teamId, details));
          else dispatch(interviewerLogin(details.user[0].userId, details));
        } else dispatch(displayMessage("Awaiting for approval"));
      } else dispatch(displayMessage("Invalid Credentials"));
    });
  };
};

export const adminLogin = (teamId, userDetails = {}) => {
  return dispatch => {
    getFeedbackByTeamId(teamId).then(feedbackDetails => {
      if (Object.keys(userDetails).length)
        dispatch(addAuthorizedUser(userDetails));
      dispatch(updateAdminData(feedbackDetails));
      dispatch(configTeam(teamId));
      dispatch(getRequests(teamId));
      dispatch(getPanel(teamId));
      dispatch(updateState("message", ""));
    });
  };
};

export const interviewerLogin = (userId, userDetails = {}) => {
  return dispatch => {
    getInterviewerFeedbacks(userId).then(feedbackDetails => {
      if (Object.keys(userDetails).length)
        dispatch(addAuthorizedUser(userDetails));
      dispatch(updateInterviewerData(feedbackDetails));
      dispatch(updateState("message", ""));
    });
  };
};

const updateAdminData = details => {
  return {
    type: "UPDATE_ADMIN_DATA",
    details
  };
};

const updateInterviewerData = details => {
  return {
    type: "UPDATE_INTERVIEWER_DATA",
    details
  };
};

export const getRequests = teamId => {
  return dispatch => {
    getRequestsByTeamId(teamId).then(details => {
      dispatch(updateRequests(details.user));
    });
  };
};

export const getPanel = teamId => {
  return dispatch => {
    getInterviewersByTeamId(teamId).then(details => {
      dispatch(updatePanel(details.user));
    });
  };
};

const addAuthorizedUser = details => {
  return {
    type: "ADD_USER_DETAILS",
    details
  };
};

const displayMessage = message => {
  return {
    type: "ADD_MESSAGE",
    message
  };
};

const updateRequests = requests => {
  return {
    type: "UPDATE_REQUESTS",
    requests
  };
};

const updatePanel = panel => {
  return {
    type: "UPDATE_PANEL",
    panel
  };
};

export const addInterviewer = (userId, teamId) => {
  return dispatch => {
    dispatch(updateState("message", "spinning"));
    getUserData(userId)
      .then(userData => {
        userData.authorized = true;
        return userData;
      })
      .then(userData =>
        updateUser(userData._id, userData)
          .then(() => {
            dispatch(getPanel(teamId));
            dispatch(getRequests(teamId));
          })
          .then(() => {
            dispatch(updateState("message", ""));
          })
      );
  };
};

export const makeAdmin = (userId, teamId) => {
  return dispatch => {
    dispatch(updateState("message", "spinning"));
    getUserData(userId)
      .then(userData => {
        userData.admin = true;
        return userData;
      })
      .then(userData =>
        updateUser(userData._id, userData)
          .then(() => {
            dispatch(getPanel(teamId));
            dispatch(getRequests(teamId));
          })
          .then(() => {
            dispatch(updateState("message", ""));
          })
      );
  };
};

export const deleteUser = (userId, teamId) => {
  return dispatch => {
    removeUser(userId).then(() => {
      dispatch(getPanel(teamId));
      dispatch(getRequests(teamId));
    });
  };
};

export const updateState = (key, value) => {
  return {
    type: "UPDATE_STATE",
    key,
    value
  };
};