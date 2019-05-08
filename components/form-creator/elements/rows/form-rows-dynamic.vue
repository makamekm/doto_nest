<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
      <form-layout-dynamic
        :form="element.children"
        v-on="$listeners"/>
  </div>
</template>

<script lang="ts">
import FormRowsProperty from "./form-rows-property.vue";

export default {
  name: 'form-rows-dynamic',
  props: {
    element: Object,
  },
  methods: {
    openPropertyWindow() {
      this['$modal'].open({
        parent: this,
        component: FormRowsProperty,
        props: {
          element: this['element'],
        }
      });
    },
  },
}
</script>
