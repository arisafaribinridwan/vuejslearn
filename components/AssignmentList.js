// assignmentList.js

import Assignment from "./Assignment.js";

export default {
  components: { Assignment },
  template: `
  <section
    class="mx-2 my-4 p-2 rounded-md"
    
    v-show="assignments.length"
    :class="{
      'bg-orange-300': title === 'In Progress',
      'bg-green-400': title === 'Completed',
    }"
  >
    <h2 class="font-bold mb-2">{{ title }}</h2>
      <assignment
        v-for="assignment in assignments"
        :key="assignment.id"
        :assignment="assignment"      
      ></assignment>
  </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },
};
