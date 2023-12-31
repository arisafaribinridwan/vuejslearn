export default {
  template: `
    <button class="bg-slate-200 hover:bg-slate-500 p-2 rounded-md"
    @click="pesan"
    >
      <slot />
    </button>
    <p>{{ message }}</p>
    `,

  data() {
    return {
      message: "Ini Pesan original dari kami",
    };
  },

  methods: {
    pesan() {
      this.message = prompt("Masukan pesan yang baru!");
    },
  },

  props: {
    typebtn: {
      type: String,
      default: "Primary",
    },
  },
};
