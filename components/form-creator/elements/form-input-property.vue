<template>
  <form class="columns lc-is-no-margin" v-on:submit.prevent="save">
    <div class="column is-offset-half is-half">
      <div class="card" ref="form">
        <header class="card-header">
          <div class="card-header-title">Input Properties</div>
        </header>
        <section class="card-content gl-form-container">
          <b-field horizontal label="Label">
            <b-input ref="toBeFocused" type="input" v-model="label"></b-input>
          </b-field>

          <b-field horizontal label="Placeholder">
            <b-input type="input" v-model="placeholder"></b-input>
          </b-field>

          <b-field horizontal>
            <p class="control">
              <button
                class="button gl-form-btn"
                @click="$parent.close()">
                  Cancel
              </button>
              <button
                submit
                class="button is-primary gl-form-btn">
                  Save & Close
              </button>
            </p>
          </b-field>
        </section>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.lc-is-no-margin {
  margin: 0;
}
</style>

<script lang="ts">
export default {
  name: 'form-input-property',
  props: {
    element: Object,
  },
  data: () => ({
    label: '',
    placeholder: '',
  }),
  mounted() {
    this['readElementValues']();
    this['$refs'].toBeFocused.$el.children[0].focus();
  },
  methods: {
    save() {
      this.change();
      this['$parent'].close();
    },
    readElementValues() {
      this['label'] = this['element'].label;
      this['placeholder'] = this['element'].placeholder;
    },
    getChanges() {
      return {
        label: this['label'],
        placeholder: this['placeholder'],
      }
    },
    change() {
      this['$parent']['$parent'].$emit(
        'change-action',
        this['element'],
        this.getChanges(),
      );
    },
  }
}
</script>
