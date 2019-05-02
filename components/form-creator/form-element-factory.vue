<template>
  <div>
    <form-grid
      v-if="element.type === 'grid'"
      :layout="element.layout"
      @change="element.layout = $event">
      <template
        v-for="(form, index) in element.children"
        v-slot:[index]>
        <form-layout :form="form"/>
      </template>
    </form-grid>

    <b-field
      v-if="element.type === 'input'"
      :label="element.label">
      <b-input :type="element.inputType" :name="element.name"/>
    </b-field>
  </div>
</template>

<script lang="ts">
import FormGrid from "./form-grid.vue";
import FormLayout from "./form-layout.vue";

export default {
  name: 'form-element-factory',
  props: {
    element: Object,
  },
  // components: {
  //   FormGrid, FormLayout,
  // },
}
</script>
