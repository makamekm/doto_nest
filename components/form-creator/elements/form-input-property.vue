<template>
  <div class="columns lc-is-no-margin">
    <div class="column is-offset-half is-half">
      <div class="card" ref="form">
        <header class="card-header">
          <div class="card-header-title">Input Property</div>
        </header>
        <section class="card-content gl-form-container">
          <b-field horizontal label="Label">
            <b-input type="input" v-model="label"></b-input>
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
                class="button is-primary gl-form-btn"
                @click="save">
                  Save & Close
              </button>
            </p>
          </b-field>
        </section>
      </div>
    </div>
  </div>
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
