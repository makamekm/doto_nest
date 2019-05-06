<template>
  <form-container
    tag="ul"
    class="menu-list"
    :value="list"
    :preventOnFilter="false"
    :sort="false"
    :swapThreshold="0.5"
    :animation="200"
    :group="{ name: 'form', pull: 'clone', put: false }">
    <li
      v-for="(element, index) in elements"
      :key="index">
        <a class="is-graggable">{{ element.label }}</a>
      </li>
  </form-container>
</template>

<style lang="scss" scoped>
.is-graggable {
  cursor: move;
}
</style>

<script lang="ts">
import FormContainer from "vuedraggable";

export default {
  name: 'form-menu',
  components: {
    FormContainer,
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
          inputType: '',
          path: '',
        }),
      },
    ]
  }),
  computed: {
    list() {
      return (this['elements'] as any[]).map((item) => item.getElement());
    }
  }
}
</script>
