<template>
  <form-container
    v-model="value"
    :preventOnFilter="false"
    :sort="false"
    :swapThreshold="0.5"
    :animation="200"
    filter=".is-not-draggable"
    class="is-full-height"
    :group="{ name: 'form' }"
    draggable=".form-element">
    <template
      v-for="(element, index) in form">
        <form-element
          v-on="$listeners"
          :form="form"
          :element="element"
          :key="index"/>
    </template>
  </form-container>
</template>

<style lang="scss">
.is-full-height {
  content: "";
  height: 100%;
  width: 100%;
}
</style>

<script lang="ts">
import FormContainer from "vuedraggable";
import FormElement from "./library/form-element.vue";
import "./form-standart";

export default {
  name: 'form-layout',
  components: {
    FormContainer, FormElement,
  },
  props: {
    form: Array,
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
