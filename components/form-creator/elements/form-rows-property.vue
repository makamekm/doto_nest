<template>
  <form class="columns lc-is-no-margin" v-on:submit.prevent="save">
    <div class="column is-offset-half is-half">
      <div class="card" ref="form">
        <header class="card-header">
          <div class="card-header-title">Rows Properties</div>
        </header>
        <section class="card-content gl-form-container">
          <b-field horizontal label="Label">
            <b-input ref="toBeFocused" type="input" v-model="label"></b-input>
          </b-field>

          <b-field horizontal label="Path">
            <b-input type="input" v-model="path"></b-input>
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
  name: 'form-rows-property',
  props: {
    element: Object,
  },
  data: () => ({
    label: '',
    path: '',
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
      this['path'] = this['element'].path;
    },
    getChanges() {
      return {
        label: this['label'],
        path: this['path'],
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
