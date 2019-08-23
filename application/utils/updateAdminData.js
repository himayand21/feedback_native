import loadData from "./loadData";
const updateAdminData = (state, details) => {
  let data = [];
  if(details.feedback){
  details.feedback.map(candidate => {
    let each = {};
    loadData(each, candidate);
    data.push(each);
  });
}
  return {
    ...state,
    data,
    requests: [],
    interviewers: []
  };

};
export default updateAdminData;
