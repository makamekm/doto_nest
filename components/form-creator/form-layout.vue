<template>
  <form-container group-name="form" @drop="onDrop">
    <template
      v-for="(element, index) in form">
        <form-element
          @action-remove="onRemove"
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
  methods: {
    onRemove(element) {
      this["form"].splice(this["form"].indexOf(element), 1); 
      console.log(element, this["form"]);
    },
    onDrop(dropResult) {
      console.log(dropResult);
    }
  }
}
</script>
