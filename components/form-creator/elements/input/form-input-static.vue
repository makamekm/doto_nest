<template>
  <div
    @contextmenu.stop.prevent="openPropertyWindow">
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
import FormInputProperty from "./form-input-property.vue";

export default {
  name: 'form-input-static',
  props: {
    element: Object,
    dataGet: Function,
  },
  computed: {
    value: {
      get() {
        return this['dataGet'](this['element'].path);
      },
      set(value) {
        this['$emit']('data-change', this['element'].path, value);
      }
    },
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
