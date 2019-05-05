<template>
  <div
    @contextmenu.prevent="openPropertyWindow">
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
  name: 'form-input',
  props: {
    element: Object,
  },
  methods: {
    openPropertyWindow() {
      this['$modal'].open({
        parent: this,
        component: FormInputProperty,
        props: {
          element: this['element'],
        }
      });
    },
  }
}
</script>
