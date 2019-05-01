<template>
  <form-draggable class="form-draggable">
    <slot/>
  </form-draggable>
</template>

<style lang="scss" scoped>
.form-draggable {
  position: relative;
  box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0);
  transition: padding 300ms, box-shadow 300ms;
  &:hover {
    padding: $column-gap * 2;
    box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0.2);
  }
}
</style>

<script lang="ts">
import FormDraggable from "./form-draggable.vue";

export default {
  components: {
    FormDraggable,
  },
}
</script>

