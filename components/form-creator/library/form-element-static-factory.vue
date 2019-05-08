<template>
  <div>
    <component
      v-if="!!registry[element.type].staticComponent"
      v-on="$listeners"
      :data-get="dataGet"
      :element="element"
      v-bind:is="registry[element.type].staticComponent"/>
  </div>
</template>

<script lang="ts">
import {registry} from "../form-registry";

export default {
  name: 'form-element-static-factory',
  props: {
    element: Object,
    dataGet: Function,
  },
  computed: {
    registry() {
      return registry;
    }
  },
}
</script>
