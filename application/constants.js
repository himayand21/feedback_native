const url = "https://feedback-loop-new.herokuapp.com";
export default url;

export const SECURITY_Q = [
  { value: "chocolate", label: "Do you have a nickname? What is it?" },
  { value: "strawberry", label: "Who was your first school teacher?" },
  { value: "vanilla", label: "What is your favorite book?" },
  { value: "cardamom", label: "What is your favorite color?" },
  { value: "basil", label: "What is your favorite sport?" },
  { value: "coriander", label: "What is your favorite cuisine?" }
];
export const credentials = [
  "admin",
  "authorized",
  "email",
  "name",
  "password",
  "teamId",
  "userId",
  "widget"
];

export const formParams = {
  loginParams: [
    { title: "name"},
    {
      title: "email"
    },
    { title: "password"}
  ],
  signupParams: [
      { title: "name"},
      {
        title: "email"
      },
      { title: "password"}
  ]
};
