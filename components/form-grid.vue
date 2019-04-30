<template>
  <div :class="{
    'form-grid': true,
    'is-resizing': isResizing,
  }" :style="{
    userSelect: isResizing ? 'none' : '',
  }" @mousedown="onMouseDown">
    <template v-for="(col, index) in layout.length">
      <div class="form-grid-item"
        v-bind:key="index"
        :data-content="layout[index]"
        :style="{ flex: layout[index] }">
        <slot :name="index"></slot>
      </div>
      <div class="form-grid-resizer" v-bind:key="index + '_resizer'"/>
    </template>
  </div>
</template>

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

<script>
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
    onMouseDown({ target: resizer, pageX: initialPageX, pageY: initialPageY }) {
      if (resizer.className && resizer.className.match('form-grid-resizer')) {
        let { $el: container, layout } = this;

        let pane = resizer.previousElementSibling;
        let {
          offsetWidth: initialPaneWidth,
          offsetHeight: initialPaneHeight,
        } = pane;

        const { addEventListener, removeEventListener } = window;

        const resize = (initialSize, offset = 0) => {
          let containerWidth = container.clientWidth;
          let paneWidth = initialSize + offset;
          const size = (Math.round(paneWidth / containerWidth * this.$options.propsData.layout.length * 20) / 20).toFixed(1);
          return size;
        };

        this.isResizing = true;

        const onMouseMove = ({ pageX, pageY }) => {
          const size = resize(initialPaneWidth, pageX - initialPageX);
          const layout = this.$options.propsData.layout;
          let col = 0;
          let child = pane;
          while((child = child.previousSibling) != null) {
            if (child.className && child.className.match('form-grid-item')) {
              col++;
            }
          }
          this.$emit('change', layout.map((n, index) => col === index ? size : n));
        };

        const onMouseUp = () => {
          this.isResizing = false;

          removeEventListener('mousemove', onMouseMove);
          removeEventListener('mouseup', onMouseUp);
        };

        addEventListener('mousemove', onMouseMove);
        addEventListener('mouseup', onMouseUp);
      }
    },
  },
};
</script>
