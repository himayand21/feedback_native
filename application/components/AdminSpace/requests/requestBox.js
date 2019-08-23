import React from "react";
import { View, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import SearchBar from "../searchBar";
import RequestList from "./requestList";
import { getRequests, addInterviewer, deleteUser } from "../../../actions/user";
import Modal from "react-native-modalbox";
import styles from "../../../styles";
import NoData from "../../CommonElements";

class RequestBox extends React.Component {
  componentDidMount() {
    this.props.getRequests(this.props.teamId);
  }
  state = {
    spinning: false,
    search: ""
  };
  updateState = (title, text) => this.setState({ [title]: text });

  refresh = async () => {
    await this.setState({ spinning: true });
    await this.props.getRequests(this.props.teamId);
    await this.setState({ spinning: false });
  };

  render() {
    const { store } = this.props;
    return (
      <View>
        <SearchBar
          updateState={this.updateState}
          search={this.state.search}
          placeholder="Requests..."
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.spinning}
              onRefresh={async () => this.refresh()}
              tintColor={"steelblue"}
            />
          }
        >
          <RequestList
            data={store.filter(request =>
              request.name
                .toUpperCase()
                .includes(this.state.search.toUpperCase())
            )}
            length={store.length}
            approve={this.props.addInterviewer}
            decline={this.props.deleteUser}
            teamId={this.props.teamId}
          />
        </ScrollView>
        <Modal
          style={styles.doneMessage}
          isOpen={this.props.message === "spinning"}
          position={"center"}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="steelblue" />
          </View>
        </Modal>
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    store: state.userData.requests,
    teamName: state.userData.teamName,
    teamId: state.userData.teamId,
    message: state.userData.message
  };
}

export default connect(
  mapStatetoProps,
  { getRequests, addInterviewer, deleteUser }
)(RequestBox);
