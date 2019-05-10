<template>
  <div
    class="is-full-height">
    <template
      v-for="(element, index) in form">
        <form-element-static
          v-on="$listeners"
          :data-get="dataGet"
          :array-position="arrayPosition || []"
          :form="form"
          :element="element"
          :key="index"/>
    </template>
  </div>
</template>

<style lang="scss">
.is-full-height {
  content: "";
  height: 100%;
  width: 100%;
}
</style>

<script lang="ts">
import FormElementStatic from "./library/form-element-static.vue";
import "./form-standart";

export default {
  name: 'form-layout-static',
  components: {
    FormElementStatic,
  },
  props: {
    form: Array,
    dataGet: Function,
    arrayPosition: Array,
  },
  computed: {
    value: {
      get() {
        return this['form'];
      },
      set(value) {
        this['$emit']('form-change', this['form'], value);
      }
    }
  },
  methods: {
    getShouldAcceptDrop(src, payload) {
      payload.newForm = this['form'];
      return true;
    },
  },
}
</script>
