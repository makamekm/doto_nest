<template>
  <form-grid-layout
    :layout="element.layout"
    @change="$emit('change-action', element, { layout: $event })"
    @resizecontextmenu="openPropertyWindow">
    <template
      v-for="(form, index) in element.children"
      v-slot:[index]>
      <form-layout-dynamic
        :key="index"
        :form="form"
        v-on="$listeners"/>
    </template>
  </form-grid-layout>
</template>

<script lang="ts">
import FormGridLayout from "./form-grid-layout.vue";
import FormGridProperty from "./form-grid-property.vue";

export default {
  name: 'form-grid-dynamic',
  props: {
    element: Object,
  },
  components: {
    FormGridLayout,
  },
  methods: {
    openPropertyWindow(index) {
      this['$modal'].open({
        parent: this,
        component: FormGridProperty,
        props: {
          element: this['element'],
          index,
        }
      });
    },
  }
}
</script>
