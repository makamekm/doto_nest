<template>
  <div class="toggle-box">
    <div class="columns is-vcentered is-gapless">
      <div class="column">
        <div :class="{'toggle-box--value--false': true, 'is-active': inputValue === false}" @click="onToggle(false)">
          {{placeholderFalse}}
        </div>
      </div>
      <div class="column">
        <div :class="{'toggle-box--value--true': true, 'is-active': inputValue === true}" @click="onToggle(true)">
          {{placeholderTrue}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'value': [Boolean],
    placeholderTrue: {
      type: String,
      dafault: 'Approve',
    },
    placeholderFalse: {
      type: String,
      dafault: 'Decline',
    },
  },
  data: () => ({
    inputValue: null,
  }),
  methods: {
    onToggle(value) {
      if (this.inputValue === value) {
        this.inputValue = null;
      } else {
        this.inputValue = value;
      }
      // this.$emit('change', this.inputValue);
    }
  }
}
</script>
