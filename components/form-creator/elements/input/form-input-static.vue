<template>
  <div>
      <b-field
        :label="element.label">
        <b-input
          ref="input"
          :value="value"
          @input.native="handleInput"
          :type="element.inputType"
          :name="element.name"
          :placeholder="element.placeholder"/>
      </b-field>
  </div>
</template>

<script>
export default {
  name: 'form-input-static',
  props: {
    element: Object,
    dataGet: Function,
    arrayPosition: Array,
  },
  data: () => ({
    selectionStart: 0,
    selectionEnd: 0,
  }),
  methods: {
    handleInput(e) {
      const value = e.target.value;
      const selectionStart = e.target.selectionStart;
      const selectionEnd = e.target.selectionEnd;

      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;

      this.$emit(
        'data-change',
        {
          path: this.element.path,
          value,
          arrayPosition: this.arrayPosition,
          selectionStart,
          selectionEnd,
          setSelectionStart: (value) => this.selectionStart = value,
          setSelectionEnd: (value) => this.selectionEnd = value,
        }
      );
    },
  },
  watch: {
    value() {
      const element = this.$refs.input.$refs.input;
      this.$nextTick(() => {
        try {
          element.selectionStart = this.selectionStart;
          element.selectionEnd = this.selectionEnd;
        } finally {}
      });
    }
  },
  computed: {
    value: {
      get() {
        return this.dataGet(
          this.element.path,
          this.arrayPosition,
        );
      },
      set(value) {
      }
    },
  },
}
</script>
