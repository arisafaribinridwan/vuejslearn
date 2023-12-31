export default {
  template: `
    <button
    :class= "{
      'relative p-2 rounded-md disabled:cursor-not-allowed': true,
      'bg-blue-400 hover:bg-blue-500': typebtn === 'primary',
      'bg-purple-400 hover:bg-purple-500': typebtn === 'secondary',
      'bg-slate-400 hover:bg-slate-500': typebtn === 'muted',
      'is-loading': processing
    }"
    :disabled= "processing"
    @click="check"
    >
    <slot />
    </button>
    `,

  props: {
    typebtn: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    check() {
      this.props.processing['default'] = true;
    },
  },
};
