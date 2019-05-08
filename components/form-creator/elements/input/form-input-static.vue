<template>
  <div>
      <b-field
        :label="element.label">
        <b-input
          v-model="value"
          :type="element.inputType"
          :name="element.name"
          :placeholder="element.placeholder"/>
      </b-field>
  </div>
</template>

<script lang="ts">
export default {
  name: 'form-input-static',
  props: {
    element: Object,
    dataGet: Function,
    arrayPosition: Array,
  },
  computed: {
    value: {
      get() {
        return this['dataGet'](
          this['element'].path,
          this['arrayPosition'],
        );
      },
      set(value) {
        this['$emit'](
          'data-change',
          this['element'].path,
          value,
          this['arrayPosition'],
        );
      }
    },
  },
}
</script>
