<template>
  <form-draggable class="form-element">
    <form-element-factory
      v-on="$listeners"
      :element="element"/>
    <div
      class="form-element-controls"
      @mousedown="$event.stopPropagation()">
        <form-element-control-factory
          v-on="$listeners"
          :element="element"/>
        <div
          class="form-element-remove-control"
          @click="$emit('remove', element, form)"/>
    </div>
  </form-draggable>
</template>

<script lang="ts">
import FormDraggable from "./form-draggable.vue";
import FormElementFactory from "../form-element-factory.vue";
import FormElementControlFactory from "../form-element-control-factory.vue";

export default {
  name: 'form-element',
  props: {
    element: Object,
    form: Array,
  },
  components: {
    FormDraggable, FormElementFactory, FormElementControlFactory,
  },
}
</script>

<style lang="scss" scoped>
.form-element:not(:first-child) {
  margin-top: $column-gap * 2;
}
</style>

<style lang="scss" scoped>
.form-element-remove-control {
  position: relative;
  width: $column-gap * 2;
  height: $column-gap * 2;
  transition: background-color 300ms, transform 300ms;
  background-color: rgba(0, 0, 0, 0);
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 1px;
    top: $column-gap;
    left: 1px;
    transform: rotateZ(45deg);
    width: $column-gap * 1.25;
    transition: left 300ms, background-color 300ms;
  }
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 1px;
    top: $column-gap;
    left: 1px;
    transform: rotateZ(-45deg);
    width: $column-gap * 1.25;
    transition: left 300ms, background-color 300ms;
  }
  &:active {
    transform: scale(0.8);
    &::before, &::after {
      background-color: rgba(255, 0, 0, 0.4);
    }
  }
}
.form-element-controls {
  content: "";
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  top: 1px;
  right: 1px;
  opacity: 0;
  transform-origin: top right;
  transition: transform 300ms, opacity 300ms;
  background: linear-gradient(215deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
  &:hover {
    transform: scale(2);
  }
}
.form-element {
  position: relative;
  box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0);
  transition: padding 300ms, box-shadow 300ms;
  &:hover {
    padding: $column-gap * 2;
    box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0.2);
    & > .form-element-controls {
      pointer-events: all;
      opacity: 1;
    }
  }
}
.smooth-dnd-no-user-select {
  .form-element {
    padding: 0;
    box-shadow: inset 0 0 0px 1px rgba(0, 0, 0, 0);
    & > .form-element-controls {
      pointer-events: none;
      opacity: 0;
    }
  }
}
</style>

