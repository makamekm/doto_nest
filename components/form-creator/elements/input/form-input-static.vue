<template>
  <div>
      <b-field
        :label="element.label">
        <b-input
          v-restore-cursor-position="position"
          :value="value"
          @input.native="handleInput"
          :type="element.inputType"
          :name="element.name"
          :placeholder="element.placeholder"/>
      </b-field>
  </div>
</template>

<script lang="ts">
export default {
  name: 'form-input-static',
  props: {
    element: Object,
    dataGet: Function,
    arrayPosition: Array,
  },
  data: () => ({
    position: 0,
  }),
  methods: {
    handleInput(e) {
      const value = e.target.value;
      const position = e.target.selectionStart;
      this['position'] = position;
      this['$emit'](
        'data-change',
        this['element'].path,
        value,
        this['arrayPosition'],
        {
          position,
          setPosition: (value) => this['position'] = value,
        }
      );
    },
  },
  directives: {
    restoreCursorPosition: {
      update(e, { value }, b, c) {
        const element = e.childNodes[0];
        console.log(value, element.selectionStart, element);
        // if (element.selectionStart !== value) {
        //   element.selectionStart = value;
        //   element.selectionEnd = value;
        // }
      }
    }
  },
  computed: {
    value: {
      get() {
        return this['dataGet'](
          this['element'].path,
          this['arrayPosition'],
        );
      },
      set(value) {
      }
    },
  },
}
</script>
