import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "../../styles";
import {
  Rating,
  Job,
  Experience,
  Interview,
  Status
} from "./feedbackListElements";
import {SubHeader, NoData} from "../CommonElements";

class FeedbackList extends React.Component {
  render() {
    return (
      <View>
        {Object.keys(this.props.data).length ? (
          <View
            style={{
              ...styles.form,
              paddingVertical: 0,
              paddingHorizontal: 0,
              marginBottom: 30,
              marginTop: 10
            }}
          >
            {this.props.data.map((feedback, index) => (
              <TouchableOpacity
                key={"feedback-list" + index}
                onPress={() => this.props.navigate("Profile", { name: feedback.name })}
              >
                <View
                  style={{
                    ...styles.feedback,
                    borderBottomWidth:
                      index === this.props.data.length - 1 ? 0 : 0.5
                  }}
                >
                  <View style={styles.nameTag}>
                    <SubHeader text={feedback.name} nameTag={true} />
                    <Rating skill={feedback.skill} />
                  </View>
                  <Job job={feedback.designation} />
                  <Experience
                    year={feedback.exp_year}
                    month={feedback.exp_month}
                  />
                  <Status status={feedback.status} />
                  <Interview
                    interviewer={feedback.interviewer_name}
                    interviewDate={feedback.date
                      .toString()
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <NoData text="No feedbacks found."/>
        )}
      </View>
    );
  }
}

export default FeedbackList;