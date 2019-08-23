const modalTable = {
    parameter: {
      label: "Search By",
      data: {
        name: {
          label: "Candidate",
          icon: "user-alt",
          type: "FontAwesome5"
        },
        interviewer_name: {
          label: "Interviewer",
          icon: "user-tie",
          type: "FontAwesome5"
        },
        designation: {
          label: "Job Title",
          icon: "building",
          type: "FontAwesome"
        }
      }
    },
    filter: {
      label: "Quick Filter",
      data: {
        Selected: {
          label: "Selected",
          icon: "grin",
          type: "FontAwesome5"
        },
        On_hold: {
          label: "On hold",
          icon: "meh",
          type: "FontAwesome5"
        },
        Rejected: {
          label: "Rejected",
          icon: "sad-cry",
          type: "FontAwesome5"
        }
      }
    },
    sort: {
      label: "Sort By",
      data: {
        date: {
          label: "Date",
          icon: "calendar",
          type: "FontAwesome"
        },
        experience: {
          label: "Experience",
          icon: "book-reader",
          type: "FontAwesome5"
        },
        rating: {
          label: "Rating",
          icon: "star",
          type: "FontAwesome"
        }
      }
    }
  };
  module.exports = modalTable