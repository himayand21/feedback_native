import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Details, Rating } from "../Profile";
import styles from "../../styles";
import { SubHeader, TopBar, Icon } from "../CommonElements";


const Profile = props => {
    const name = props.navigation.getParam("name");
    const { data: store } = props.store;
    const data = store.filter(feedback => feedback.name === name)[0];
    return (
        <View>
            <TopBar
                name={props.store.name}
                iconName="arrow-back"
                action={() => props.navigation.goBack()}
            />
            <ScrollView>
                <View style={{ ...styles.form, marginBottom: 200, paddingTop: 30, marginTop: 20 }}>
                    <Icon name="address-card" />
                    <SubHeader text="Applicant Details" />
                    <Details
                        details={{
                            Name: data.name,
                            Applying_for: data.designation,
                            Experience: `${data.exp_year} year(s) ${
                                data.exp_month
                                } month(s)`
                        }}
                    />
                    <SubHeader text="Interview Details" />
                    <Details
                        details={{
                            Interviewed_by: data.interviewer_name,
                            Date_of_interview: data.date.toString()
                                .substring(0, 10)
                                .split("-")
                                .reverse()
                                .join("-"),
                            Comments: data.comments,
                            Status: data.status,
                        }}
                    />
                    <SubHeader text="Skills" />
                    <Rating skill={data.skill} />
                </View>
            </ScrollView>
        </View>
    );
};
function mapStatetoProps(state) {
    return {
        store: state.userData
    };
}
export default connect(
    mapStatetoProps,
    {}
)(Profile);
