<template>
  <form-container group-name="form" @drop="$emit('drop', $event)">
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
.smooth-dnd-container.vertical {
  content: "";
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import FormContainer from "~/components/form-creator/form-container.vue";
import FormElement from "~/components/form-creator/form-element.vue";

export default {
  name: 'form-layout',
  components: {
    FormContainer, FormElement,
  },
  props: {
    form: Array,
  },
}
</script>
