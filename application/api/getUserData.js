import url from "../constants";
const getUserData = async user_id => {
  const res = await fetch(url + "/user/get/" + user_id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = await res.json();
  return response.user;
};
export default getUserData;
