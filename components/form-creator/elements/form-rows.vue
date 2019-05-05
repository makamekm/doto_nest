<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
      <b-field
        :label="element.label">
          <form-layout
            :form="element.children"
            v-on="$listeners"/>
      </b-field>
  </div>
</template>

<script lang="ts">
import FormRowsProperty from "./form-rows-property.vue";

export default {
  name: 'form-rows',
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
