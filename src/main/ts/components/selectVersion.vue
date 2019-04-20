<template>
  <b-select placeholder="Select version" 
    v-bind:value="value"
    v-on:input="modelChange">
    <option v-for="item in data" v-bind:key="item.id" :value="item.id">{{ item.version }}</option>
  </b-select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Model } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const NodeStore = namespace("node");

@Component({})
export default class extends Vue {
  @NodeStore.State("versions") data;
  @Prop() value?: string | number;
  modelChange(value) {
    this.$emit('input', value);
  }
}
</script>