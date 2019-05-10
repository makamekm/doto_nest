<template>
  <div class="form-element-factory-control">
    <div
      class="form-element-settings-control"
      @click="openPropertyWindow">
    </div>
    <div
      class="form-element-remove-control"
      @click="onRemove">
    </div>
    <div
      class="form-element-add-control"
      @click="onAdd">
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
.form-element-add-control {
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
    transform: rotateZ(0deg);
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
    transform: rotateZ(-90deg);
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
    transform: rotateZ(0deg);
    width: $column-gap * 1.25;
    transition: left 300ms, background-color 300ms;
  }
  &:active {
    transform: scale(0.8);
    &::after {
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
import FormGridProperty from "./form-grid-property.vue";

export default {
  name: 'form-grid-control',
  props: {
    element: Object,
  },
  methods: {
    onRemove() {
      const element = this['element'];
      const position = element.layout.length - 1;
      const layout = element.layout.slice(0);
      const children = element.children.slice(0);
      layout.splice(position, 1);
      children.splice(position, 1);
      this['$emit'](
        'change-action',
        element,
        {
          layout,
          children,
        },
      );
    },
    onAdd() {
      const element = this['element'];
      this['$emit'](
        'change-action',
        element,
        {
          layout: [...element.layout, 1],
          children: [...element.children, []],
        },
      );
    },
    openPropertyWindow() {
      this['$modal'].open({
        parent: this,
        component: FormGridProperty,
        props: {
          element: this['element'],
        }
      });
    },
  }
}
</script>
