<template>
  <form-container class="menu-list" tag="ul" behaviour="copy" group-name="form"
  :get-child-payload="(index) => ({
    form: [],
    element: getElement(index),
  })">
    <form-draggable
      tag="li"
      v-for="(element, index) in elements"
      :key="index">
        <a class="is-graggable-cursor">{{ element.label }}</a>
      </form-draggable>
  </form-container>
</template>

<style lang="scss" scoped>
.is-graggable-cursor {
  cursor: move;
}
</style>

<script lang="ts">
import FormContainer from "~/components/form-creator/library/form-container.vue";
import FormDraggable from "~/components/form-creator/library/form-draggable.vue";

export default {
  name: 'form-menu',
  components: {
    FormContainer,
    FormDraggable,
  },
  data: () => ({
    elements: [
      {
        label: 'Grid',
        getElement: () => ({
          type: 'grid',
          layout: [1],
          children: [[]],
        }),
      },
      {
        label: 'Input',
        getElement: () => ({
          type: 'input',
          label: '',
          placeholder: '',
        }),
      },
    ]
  }),
  methods: {
    getElement(index: number) {
      return this['elements'][index].getElement();
    }
  }
}
</script>
