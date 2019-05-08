<template>
  <div class="form-element">
    <form-element-static-factory
      v-on="$listeners"
      :data-get="dataGet"
      :element="element"/>
  </div>
</template>

<script lang="ts">
import FormElementStaticFactory from "./form-element-static-factory.vue";

export default {
  name: 'form-element-static',
  props: {
    element: Object,
    form: Array,
    dataGet: Function,
  },
  components: {
    FormElementStaticFactory,
  },
}
</script>

<style lang="scss" scoped>
.form-element:not(:first-child) {
  margin-top: $column-gap * 2;
}
</style>
