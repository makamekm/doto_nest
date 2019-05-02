<template>
  <form-container group-name="form" @drop="onDrop">
    <template
      v-for="(element, index) in form">
        <form-element
          :element="element"
          :key="index"/>
    </template>
  </form-container>
</template>

<script lang="ts">
import FormContainer from "~/components/form-creator/form-container.vue";
import FormElement from "~/components/form-creator/form-element.vue";

export default {
  name: 'form-layout',
  // components: {
  //   FormContainer, FormElement,
  // },
  props: {
    form: Array,
  },
  methods: {
    onDrop(dropResult) {
      console.log(dropResult);
    }
  }
}
</script>
