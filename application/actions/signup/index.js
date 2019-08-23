
import loadAllTeamNames from "../../api/loadAllTeamNames";
import checkDuplicateName from "../../api/checkDuplicateName";
import submitRequest from "../../api/submitRequest";

export const updateStateSignUp = (key, value) => {
    const action = {
        type: "UPDATE_STATE_SIGNUP",
        key,
        value
    };
    return action;
};
export const searchName = (name) => {
    return dispatch => {
        if (name)
            checkDuplicateName(name).then(res => {
                if (res.message === "found") {
                    dispatch(displayMessage(`${name} already exists`));
                }
                else dispatch(removeMessage())
            })
    }
}
const displayMessage = message => {
    return {
        type: "ADD_MESSAGE_SIGNUP",
        message
    }
}
const removeMessage = () => {
    return {
        type: "REMOVE_MESSAGE_SIGNUP"
    }
}
export const getTeamNames = () => {
    return dispatch => {
        loadAllTeamNames()
            .then(details => {
                let payload = [];
                details.map(team => {
                    payload.push({
                        label: team.teamName,
                        value: team._id
                    });
                });
                dispatch(addTeamNames(payload));
            })
    }
};
const addTeamNames = payload => {
    return {
        type: "ADD_TEAM_NAMES",
        payload
    }
}
export const handleTeamChange = team => {
    return {
        type: "HANDLE_TEAM_CHANGE",
        team
    };
};
export const selectQuestion = selectedOption => {
    return {
        type: "SELECT_QUESTION",
        selectedOption
    };
};
export const resetSignUp = () => {
    return {
        type: "RESET_SIGN_UP"
    };
};

export const signUp = store => {
    const data = {
        name: store.name,
        email: store.email,
        password: store.password,
        authorized: false,
        admin: false,
        teamId: store.team,
        question: store.selectedOption,
        answer: store.answer.toUpperCase()
    };
    return dispatch => {
        dispatch(displayMessage('started'));
        submitRequest(data).then(res => {
            if (res.message === "done")
                dispatch(displayMessage('done'));
        })
    }
}