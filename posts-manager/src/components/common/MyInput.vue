<template>
  <label :for="id">
    {{ label }}
    <input :value="modelValue" @input="updateInput" class="input" :type="type" :id="id" />
  </label>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
