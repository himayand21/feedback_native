import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 13
  },
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    color: "black",
    backgroundColor: "#F5FCFF"
  },
  loader: {
    backgroundColor: "steelblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  spinner: {
    flex: 1
  },
  headerTitleStyle: {
    color: 'white',
    fontWeight: '200',
    fontSize: 28
  },
  loadingLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: 'center'
  },
  loadingText: {
    color: 'white',
    fontSize: 22,
    marginTop: 30,
    fontWeight: '200'
  },
  userName: {
    textAlign: 'right',
    color: 'white',
    fontSize: 22,
    fontWeight: '300'
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonView: {
    width: "100%",
    marginTop: 20
  },
  inputText: {
    borderBottomColor: "steelblue",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: "100",
    fontSize: 14
  },
  inputHeading: {
    fontSize: 12,
    fontWeight: "500",
    width: '100%'
  },
  submitButton: {
    backgroundColor: "steelblue",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5
  },
  submitButtonText: {
    color: "white"
  },
  icons: { fontSize: 48, color: "steelblue" },
  safeArea: {
    flex: 1,
    backgroundColor: "steelblue"
  },
  headerIcons: {
    color: "white",
    fontSize: 18
  },
  warningView: {
    marginTop: 20
  },
  warning: {
    color: 'red',
    fontSize: 12
  },
  subHeader: {
    color: "steelblue",
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '200'
  },
  subHeaderView: {
    marginTop: 30,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 5
  },
  searchTagView: {
    marginTop: 10,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 5
  },
  nameTagView: {
    flex: 6,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 5
  },
  feedback: {
    width: "100%",
    paddingVertical: 15,
    borderBottomColor: 'lightgrey'
  },
  nameTag: {
    flexDirection: 'row',
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  rating: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'steelblue',
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 5
  },
  ratingText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  smallTag: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 7,
  },
  smallIcon: {
    fontSize: 15,
    width: 20,
    marginRight: 5,
    textAlign: 'center'
  },
  feedbackList: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginHorizontal: 20,
    marginVertical: 40,
    borderRadius: 10
  },
  sortButton: {
    marginLeft: "5%",
    justifyContent: "center",
    width: "95%",
    flex: 1,
    alignItems: "center",
    paddingLeft: 5,
    marginTop: 45,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "steelblue"
  },
  sortModal: {
    width: width / 1.1,
    height: 400,
    borderRadius: 10,
  },
  doneMessage: {
    width: width / 1.6,
    height: 150,
    borderRadius: 10,
  },
  acceptButton: {
    flex: 1,
    paddingVertical: 6,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: "rgb(70,130,180)",
    alignItems: "center",
    paddingLeft: 5
  },
  declineButton: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 3,
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 5,
    backgroundColor: "white",
    color: "grey",
    borderColor: "grey",
    borderWidth: 0.5
  },
  filterBox: { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 15 },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  center: { width: "100%", alignItems: "center", justifyContent: "center" }
});

export default styles;