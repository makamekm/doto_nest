<template>
  <div class="form-element-factory-control">
    <component
      v-if="!!registry[element.type].editControlComponent"
      v-on="$listeners"
      :element="element"
      v-bind:is="registry[element.type].editControlComponent"/>
  </div>
</template>

<style lang="scss" scoped>
.form-element-factory-control {
  display: flex;
  flex-direction: row;
}
</style>

<script lang="ts">
import {registry} from "./form-registry";

export default {
  name: 'form-element-control-factory',
  props: {
    element: Object,
  },
  computed: {
    registry() {
      return registry;
    }
  },
}
</script>
