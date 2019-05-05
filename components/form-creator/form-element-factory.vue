<template>
  <div>
    <form-grid
      v-if="element.type === 'grid'"
      :layout="element.layout"
      @change="$emit('control-action', 'grid', 'change-layout', element, $event)">
      <template
        v-for="(form, index) in element.children"
        v-slot:[index]>
        <form-layout
          :form="form"
          v-on="$listeners"/>
      </template>
    </form-grid>

    <form-input
      v-on="$listeners"
      v-if="element.type === 'input'"
      :element="element"/>
  </div>
</template>

<script lang="ts">
import FormGrid from "./elements/form-grid.vue";
import FormInput from "./elements/form-input.vue";

export default {
  name: 'form-element-factory',
  props: {
    element: Object,
  },
  components: {
    FormGrid,
    FormInput,
  },
}
</script>
