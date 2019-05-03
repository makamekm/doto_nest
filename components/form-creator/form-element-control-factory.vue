<template>
  <div class="form-element-factory-control">
    <form-grid-control
      v-if="element.type === 'grid'"
      v-on="$listeners"
      :element="element"/>

    <form-input-control
      v-if="element.type === 'input'"
      v-on="$listeners"
      :element="element"/>
  </div>
</template>

<style lang="scss" scoped>
.form-element-factory-control {
  display: flex;
  flex-direction: row;
}
</style>

<script lang="ts">
import FormGridControl from "./elements/form-grid-control.vue";
import FormInputControl from "./elements/form-input-control.vue";

export default {
  name: 'form-element-control-factory',
  props: {
    element: Object,
  },
  components: {
    FormGridControl,
    FormInputControl,
  }
}
</script>
