<template>
  <div :class="{'inline-edit': true, 'is-editing': isEditing}">
    <div class="inline-edit-value">
      <div class="columns is-vcentered">
        <div class="column">
          {{value}}
        </div>
        <div class="column is-narrow font-size-0">
          <div class="inline-edit-value-edit">
            <i class="i is-size-6 edit" @click="onStartEdit()"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-edit-input">
      <div class="columns is-vcentered is-gapless">
        <div class="column">
          <input
            ref="input"
            v-on:blur="onStopEdit()"
            class="inline-edit-input-control"
            placeholder="Merchant"
            type="text"
            v-model="inputValue"
          >
        </div>
        <div class="column is-narrow">
          <div class="inline-edit-input-save"
            @mousedown="onSaveMouseDown()"
            @click="onSaveEdit()"
            @mouseleave="onSaveMouseLeave()"
          >
            Save
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    isTryingToSave: false,
    isEditing: false,
    inputValue: '',
  }),
  methods: {
    onStartEdit() {
      this.inputValue = this.value;
      this.isEditing = true;
      this.isTryingToSave = false;
      setImmediate(() => this.$refs.input.focus());
    },
    onStopEdit() {
      if (!this.isTryingToSave) {
        this.isEditing = false;
      }
    },
    onSaveEdit() {
      this.isEditing = false;
      this.$emit('change', this.inputValue);
    },
    onSaveMouseDown() {
      this.isTryingToSave = true;
    },
    onSaveMouseLeave() {
      if (this.isTryingToSave) {
        this.isTryingToSave = false;
        this.isEditing = false;
      }
    }
  }
}
</script>
