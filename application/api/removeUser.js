import url from "../constants";
const removeUser = async function removeUser(user_id) {
  await fetch(url + "/user/" + user_id + "/delete", {
    method: "DELETE"
  });
};

export default removeUser;
