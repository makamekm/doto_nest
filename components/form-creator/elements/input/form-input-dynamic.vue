<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
      <b-field
        :label="element.label">
        <b-input
          :type="element.inputType"
          :name="element.name"
          :placeholder="element.placeholder"/>
      </b-field>
  </div>
</template>

<script lang="ts">
import FormInputProperty from "./form-input-property.vue";

export default {
  name: 'form-input-dynamic',
  props: {
    element: Object,
  },
  methods: {
    openPropertyWindow() {
      this['$modal'].open({
        parent: this,
        component: FormInputProperty as any,
        props: {
          element: this['element'],
        }
      });
    },
  },
}
</script>
