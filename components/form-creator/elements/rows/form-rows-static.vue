<template>
  <div class="from-rows">
    <form-layout-static
      v-for="(item, index) in value"
      :key="index"
      :data-get="dataGet"
      :array-position="[...arrayPosition, index]"
      :form="element.children"
      v-on="$listeners"/>
  </div>
</template>

<style lang="scss" scoped>
.from-rows > *:not(:first-child) {
  margin-top: $column-gap * 2;
}
</style>

<script lang="ts">
import FormRowsProperty from "./form-rows-property.vue";

export default {
  name: 'form-rows-static',
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
        ) || [];
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
