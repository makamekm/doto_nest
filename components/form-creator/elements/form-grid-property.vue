<template>
  <form v-on:submit.prevent="save">
    <div class="card" ref="form">
      <header class="card-header">
        <div class="card-header-title">Grid Properties</div>
      </header>
      <section class="card-content gl-form-container">
        <div class="columns">
          <div
            v-for="(col, index) in layout"
            class="column"
            v-bind:key="index">
              <b-input
                @hook:mounted="inputMounted(index)"
                ref="toBeFocused"
                type="input"
                :value="col"
                @input="layout[index] = $event"/>
          </div>
        </div>

        <div class="lc-is-right-align">
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
        </div>
      </section>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.lc-is-right-align {
  text-align: right;
}
</style>

<script lang="ts">
export default {
  name: 'form-grid-property',
  props: {
    element: Object,
    index: Number,
  },
  data: () => ({
    layout: [],
    children: [],
  }),
  mounted() {
    this['readElementValues']();
  },
  methods: {
    inputMounted(index) {
      if (this['index'] === index) {
        const element = this['$refs']['toBeFocused'][index].$el.children[0];
        element.focus();
        element.select();
      }
    },
    save() {
      this.change();
      this['$parent'].close();
    },
    readElementValues() {
      this['layout'] = this['element'].layout.slice(0);
      this['children'] = this['element'].children.slice(0);
    },
    getChanges() {
      return {
        layout: this['layout'],
        children: this['children'],
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
