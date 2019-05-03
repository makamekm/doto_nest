<template>
  <b-field
    :label="element.label">
    <b-input :type="element.inputType" :name="element.name"/>
  </b-field>
</template>

<script lang="ts">
export default {
  name: 'form-input',
  props: {
    element: Object,
  },
}
</script>
