const dataFormatter = store => {
    return {
        interviewer_name: store.userData.name,
        interviewer_userId: store.userData.userId,
        team_id: store.userData.teamId,
        applicant_name: store.form.applicant_name,
        interview_date: store.form.date_of_interview,
        exp_year: store.form.exp_year,
        exp_month: store.form.exp_month,
        designation: store.form.applying_for,
        skills: store.form.rating,
        comments: store.form.comments,
        status: store.form.status
      }
}
export default dataFormatter;