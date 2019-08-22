<template>
  <div :class="{'inline-edit-select': true, 'is-editing': isEditing}">
    <div class="inline-edit-select--value">
      <div class="columns is-vcentered">
        <div class="column" @dblclick="onStartEdit()">
          {{value}}
        </div>
        <div class="column is-narrow font-size-0">
          <div class="inline-edit-select--value-edit" @click="onStartEdit()">
            <i class="fas is-size-5 fa-chevron-down"/>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-edit-select--input">
      <div class="inline-edit-select--input-control" ref="target">
        <div class="columns is-vcentered">
          <div class="column">
            <b>{{placeholder}}</b>
          </div>
          <div class="column is-narrow font-size-0">
            <i class="fas is-size-5 fa-chevron-down"/>
          </div>
        </div>
      </div>
      <div class="inline-edit-select--input-list" v-dom-portal ref="popup" v-show="isEditing">
        <div :class="{
            'inline-edit-select--input-list-item': true,
            'is-active': inputValue === item || inputValue === item.key || inputValue === item.label
          }"
          tabindex="0"
          @blur="onStopEdit()"
          @focus="onContinueEdit()"
          @click="onSaveEdit()"
          @keydown.enter="onSaveEdit()"
          @keydown.up="onFocusNext(index - 1)"
          @keydown.down="onFocusNext(index + 1)"
          v-for="(item, index) in items"
          v-bind:key="item.key">
          {{item.label}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';

export default {
  props: {
    'value': [String, Object, Number],
    'items': Array,
    placeholder: {
      type: String,
      dafault: 'Select Category',
    },
  },
  data: () => ({
    isEditing: false,
    isClosing: false,
    inputValue: null,
  }),
  mounted() {
  	this.popper = new Popper(this.$refs.target, this.$refs.popup, {
      placement: 'bottom'
    });
  },
  methods: {
    onStartEdit() {
      this.inputValue = this.value;
      this.isEditing = true;
      setImmediate(() => {
        this.$refs.popup.style.width = `${Math.ceil(this.$refs.target.getBoundingClientRect().width)}px`;
        this.$refs.popup.childNodes[0].focus();
        this.popper.update();
      });
    },
    onFocusNext(index) {
      if (index >= 0 && index < this.items.length) {
        this.$refs.popup.childNodes[index].focus();
      }
    },
    onContinueEdit() {
      this.isClosing = false;
      this.isEditing = true;
    },
    onStopEdit() {
      this.isClosing = true;
      setTimeout(() => {
        if (this.isClosing) {
          this.isEditing = false;
        }
      }, 100);
    },
    onSaveEdit() {
      this.isEditing = false;
      this.$emit('change', this.inputValue);
    }
  }
}
</script>
