<template>
  <div>
    <component
      v-if="!!registry[element.type].editComponent"
      v-on="$listeners"
      :element="element"
      v-bind:is="registry[element.type].editComponent"/>
  </div>
</template>

<script lang="ts">
import {registry} from "./form-registry";

export default {
  name: 'form-element-factory',
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
