<template>
  <div>
    <component
      v-if="!!registry[element.type].dynamicComponent"
      v-on="$listeners"
      :element="element"
      v-bind:is="registry[element.type].dynamicComponent"/>
  </div>
</template>

<script lang="ts">
import {registry} from "../form-registry";

export default {
  name: 'form-element-dynamic-factory',
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
