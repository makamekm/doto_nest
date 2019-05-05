<template>
  <div class="form-element-factory-control">
    <div
      class="form-element-settings-control"
      @click="openPropertyWindow()">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-element-settings-control {
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
    top: $column-gap * 0.75;
    left: 1px;
    transform: rotateZ(0deg);
    width: $column-gap * 1.25;
    transition: left 300ms, background-color 300ms;
  }
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 1px;
    top: $column-gap * 1.25;
    left: 1px;
    transform: rotateZ(0deg);
    width: $column-gap * 1.25;
    transition: left 300ms, background-color 300ms;
  }
  &:active {
    transform: scale(0.8);
    &::before, &::after {
      background-color: rgba(0, 0, 255, 0.4);
    }
  }
}
</style>

<style lang="scss" scoped>
.form-element-factory-control {
  display: flex;
  flex-direction: row;
}
</style>

<script lang="ts">
import FormInputProperty from "./form-input-property.vue";

export default {
  name: 'form-input-control',
  props: {
    element: Object,
  },
  methods: {
    openPropertyWindow() {
      this['$modal'].open({
        parent: this,
        component: FormInputProperty,
        props: {
          element: this['element'],
        }
      });
    },
  },
}
</script>
