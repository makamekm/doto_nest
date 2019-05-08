<template>
  <div class="form-element-factory-control">
    <component
      v-if="!!registry[element.type].dynamicControlComponent"
      v-on="$listeners"
      :element="element"
      v-bind:is="registry[element.type].dynamicControlComponent"/>
  </div>
</template>

<style lang="scss" scoped>
.form-element-factory-control {
  display: flex;
  flex-direction: row;
}
</style>

<script lang="ts">
import {registry} from "../form-registry";

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
