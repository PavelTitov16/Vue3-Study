export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        this.hideModal();
      }
    },
  },
  mounted() {

  },
};
