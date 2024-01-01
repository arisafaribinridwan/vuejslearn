import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
    <assignment-list :assignments="filters.inProgress" title="In Progress" ></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed" ></assignment-list>
  `,

  data() {
    return {
      assignments: [
        { name: "Paint Body of Motorcycle", complete: false, id: 1 },
        { name: "Qailullah", complete: false, id: 2 },
        {
          name: "Learn Vue JS - Looping, conditional and computed",
          complete: false,
          id: 3,
        },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
};
