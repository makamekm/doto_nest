<template>
  <div>
    <form-grid
      v-on="$listeners"
      v-if="element.type === 'grid'"
      :element="element"/>

    <form-input
      v-on="$listeners"
      v-if="element.type === 'input'"
      :element="element"/>

    <form-rows
      v-on="$listeners"
      v-if="element.type === 'rows'"
      :element="element"/>

    <form-table
      v-on="$listeners"
      v-if="element.type === 'table'"
      :element="element"/>
  </div>
</template>

<script lang="ts">
import FormGrid from "./elements/form-grid.vue";
import FormInput from "./elements/form-input.vue";
import FormRows from "./elements/form-rows.vue";
import FormTable from "./elements/form-table.vue";

export default {
  name: 'form-element-factory',
  props: {
    element: Object,
  },
  components: {
    FormGrid,
    FormInput,
    FormRows,
    FormTable,
  },
}
</script>
