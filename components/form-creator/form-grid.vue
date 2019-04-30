<template>
  <div
    :class="{
      'form-grid': true,
      'is-resizing': isResizing,
    }"
    :style="{
      userSelect: isResizing ? 'none' : '',
    }"
    @mousedown="onMouseDown">
    <template
      v-for="(col, index) in layout.length">
      <div
        class="form-grid-item"
        v-bind:key="index"
        :data-content="layout[index]"
        :style="{ flex: layout[index] }">
        <slot
          :name="index"/>
      </div>
      <div
        class="form-grid-resizer"
        v-bind:key="index + '_resizer'"/>
    </template>
  </div>
</template>

<script>
const STEPS = 20;
export default {
  props: {
    layout: {
      type: Array,
    },
  },
  data() {
    return {
      isResizing: false,
    };
  },
  model: {
    prop: 'layout',
    event: 'change'
  },
  methods: {
    cutNegativeNumber(value) {
      return value < 0 ? 0 : value;
    },
    roundFlexSize(value) {
      return (
        Math.round(
          this.cutNegativeNumber(value) * STEPS,
        ) / STEPS
      ).toFixed(1);
    },
    getNextSize(initialSize, offset = 0) {
      const { $el: container } = this;
      const containerWidth = container.clientWidth;
      const paneWidth = initialSize + offset;
      const size = this.roundFlexSize(
        paneWidth / containerWidth * this.$options.propsData.layout.length
      );
      return size;
    },
    countPanelIndex(resizer) {
      let col = 0;
      let child = resizer.previousElementSibling;
      while((child = child.previousSibling) != null) {
        if (child.className && child.className.match('form-grid-item')) {
          col++;
        }
      }
      return col;
    },
    getNewLayout(resizer, size) {
      const layout = this.$options.propsData.layout;
      const col = this.countPanelIndex(resizer);
      const newLayout = layout.map((n, index) => col === index ? size : n);
      return newLayout;
    },
    updateLayout(resizer, initialPaneWidth, initialPageX, pageX) {
      const size = this.getNextSize(initialPaneWidth, pageX - initialPageX);
      const newLayout = this.getNewLayout(resizer, size);
      this.$emit('change', newLayout);
    },
    isResizerMouseDown(element) {
      return element.className && element.className.match('form-grid-resizer');
    },
    onMouseDown({ target: resizer, pageX: initialPageX }) {
      if (this.isResizerMouseDown(resizer)) {
        const {
          offsetWidth: initialPaneWidth,
        } = resizer.previousElementSibling;

        this.isResizing = true;

        const onMouseMove = ({ pageX }) => {
          this.updateLayout(resizer, initialPaneWidth, initialPageX, pageX);
        };

        const onMouseUp = () => {
          this.isResizing = false;

          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      }
    },
  },
};
</script>

<style lang="scss">
.form-grid {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-flow: row wrap;
  margin-left: -($column-gap * 2);
  margin-right: -($column-gap * 2);
}
.form-grid > .form-grid-item {
  position: relative;
  flex: 1;
  transition: flex 300ms;
  padding-left: $column-gap * 2;
  padding-right: $column-gap * 2;
  position: relative;
  &::before {
    content: "";
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 300ms;
    z-index: 1;
  }
  &::after {
    content: attr(data-content);
    pointer-events: none;
    color: #fff;
    font-weight: 600;
    text-align: center;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 300ms;
    z-index: 1;
  }
}
.form-grid.is-resizing > .form-grid-item {
  &::before {
    opacity: 1;
  }
  &::after {
    opacity: 1;
  }
}
.form-grid > .form-grid-resizer {
  display: block;
  position: relative;
  content: "";
  background-color: rgba(0, 0, 0, 0.15);
  width: 10px;
  margin-left: -10px;
  left: 5px;
  z-index: 1;
  cursor: col-resize;
  transition: width 300ms, margin-left 300ms, left 300ms, background-color 300ms;
  position: relative;
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 1px;
    left: calc(50% - 1px);
    top: calc(50% - 5px);
    height: 10px;
    transition: left 300ms, background-color 300ms;
  }
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 1px;
    left: calc(50% + 1px);
    top: calc(50% - 5px);
    height: 10px;
    transition: left 300ms, background-color 300ms;
  }
  &:hover {
    width: 16px;
    margin-left: -16px;
    left: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    &::after {
      left: calc(50% - 2px);
    }
    &::before {
      left: calc(50% + 2px);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
