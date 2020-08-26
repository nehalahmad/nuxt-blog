<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: { type: String, default: "input" },
    value: { type: String, default: "" }
  }
};
</script>

<style scoped>
.input-control label {
  display: block;
}
.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 15px;
}
</style>
