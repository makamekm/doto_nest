<template>
  <form-grid-layout
    isStatic
    :layout="element.layout">
    <template
      v-for="(form, index) in element.children"
      v-slot:[index]>
      <form-layout-static
        :key="index"
        :form="form"
        :data-get="dataGet"
        v-on="$listeners"/>
    </template>
  </form-grid-layout>
</template>

<script lang="ts">
import FormGridLayout from "./form-grid-layout.vue";

export default {
  name: 'form-grid-static',
  props: {
    element: Object,
    dataGet: Function,
  },
  components: {
    FormGridLayout,
  },
}
</script>
